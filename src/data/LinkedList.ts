export type NodeData = {
  question?: string;
  result?: string;
  yes?: SurveyNode;
  no?: SurveyNode;
};

export class SurveyNode {
  data: NodeData;

  constructor(data: NodeData) {
    this.data = data;
  }
}

export class LinkedList {
  head: SurveyNode | null = null;

  constructor(data: NodeData) {
    this.head = new SurveyNode(data);
  }
}
