export class Question {
    question: any;
    answers: any = [];
    sortOrder: any;
    excludeValue: any = [];
  }

  export class SelectValue {
      name: any;
      value: any;
  }

  export class Select2Question {
    question: any;
    answers: any = [];
    sortOrder: any;
    excludeValues: any = [];
  }

  export class Result {
    qnumber: string;
    reply: string;
    answer: string;
  }

  export class FullAnswer {
    questionNum: string;
    textAnswer: string;
    sortorder: number;
  }