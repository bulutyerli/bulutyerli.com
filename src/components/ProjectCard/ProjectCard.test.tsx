import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectType } from 'types/types';
import ProjectCard from './ProjectCard';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useInView: jest.fn().mockReturnValue(true),
}));

jest.mock('@sanity/client', () => ({
  createClient: jest.fn(),
}));

jest.mock('lib/imageBuilder', () => ({
  urlFor: jest.fn(() => ({
    width: jest.fn(() => ({
      height: jest.fn(() => ({
        url: jest.fn(() => '/test-image-link'),
      })),
    })),
  })),
}));

const mockData: ProjectType = {
  title: 'Project Title',
  image: {
    asset: {
      _ref: '/test-image-link',
      _type: 'image',
    },
    _type: 'image',
  },
  blur: '/blur-image.jpg',
  githubLink: 'https://github.com/test',
  liveSiteLink: 'https://live-site.com',
  description: 'This is a test description.',
  skills: ['React', 'TypeScript', 'Next.js'],
  _createdAt: 'test_date',
};

describe('ProjectCard Component', () => {
  it('should render correctly', () => {
    const { container } = render(<ProjectCard data={mockData} lang="en" />);

    expect(container).toMatchSnapshot();
  });

  it('should display project data correctly', () => {
    render(<ProjectCard data={mockData} lang="en" />);

    expect(screen.getByText('Project Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
    expect(screen.getByAltText(/project title/i)).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Visit')).toBeInTheDocument();
    mockData.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('conditionally renders "Details" button and toggles description', () => {
    render(<ProjectCard data={mockData} lang="en" />);

    const detailsButton = screen.getByText(/details/i);
    expect(detailsButton).toBeInTheDocument();

    // Click to open details
    fireEvent.click(detailsButton);
    expect(screen.getByText(mockData.description)).not.toHaveClass('hidden');

    // Click to close details
    fireEvent.click(detailsButton);
    expect(screen.queryByText(mockData.description)).toHaveClass('hidden');
  });

  it('should not show github link if not provided in data', () => {
    const mockDataNoGithub: ProjectType = {
      title: 'Project Title',
      image: {
        asset: {
          _ref: '/test-image-link',
          _type: 'image',
        },
        _type: 'image',
      },
      blur: '/blur-image.jpg',
      githubLink: '',
      liveSiteLink: 'https://live-site.com',
      description: 'This is a test description.',
      skills: ['React', 'TypeScript', 'Next.js'],
      _createdAt: 'test_date',
    };

    render(<ProjectCard data={mockDataNoGithub} lang="en" />);

    const gitHubLink = screen.queryByText('GitHub');

    expect(gitHubLink).not.toBeInTheDocument();
  });
});
