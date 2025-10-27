export interface Link {
  title: string;
  url: string;
}

export interface Example {
  title: string;
  description: string;
  link: Link;
}

export interface PhysicsData {
  contentType: 'phenomenon' | 'invention';
  physicistName: string;
  phenomenon: string;
  mathematics: string;
  biography: string;
  furtherLinks: Link[];
  realWorldExamples: Example[];
}
