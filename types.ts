
export interface MapLink {
  id: string;
  name: string;
  url: string;
  type: 'municipality' | 'union' | 'combined';
  number?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
