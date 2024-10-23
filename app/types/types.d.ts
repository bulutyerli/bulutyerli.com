export interface AboutMeData {
  title: string;
  blur: string;
  content: {
    children: {
      marks: unknown[];
      text: string;
      _key: string;
      _type: string;
    }[];
    _type: string;
    style: string;
    _key: string;
    markDefs: unknown[];
  }[];
  image: { asset: { _ref: string; _type: string } };
  lokiBlur: string;
  _createdAt: string;
  loki: { asset: { _ref: string; _type: string } };
}

export interface ProjectType {
  blur: string;
  description: string;
  githubLink: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  liveSiteLink: string;
  skills: string[];
  title: string;
  _createdAt: string;
}

export interface BlogContentBlock {
  _type: 'block';
  style: string;
  _key: string;
  children: {
    _type: 'span';
    text: string;
    marks: string[];
  }[];
  markDefs: unknown[];
}

export interface BlogType {
  title: string;
  slug: { current: string };
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  content: BlogContentBlock[];
  _createdAt: string;
}

export interface Icons {
  name: string;
  icon: React.ReactNode;
}
