// Interface 

interface Pen {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor(): void;
}

const deepWork: Pen = {
    isbn: 9781455586691,
    title: 'Deep work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
        console.log(this.author);
        
    },
};

// deepWork.isbn = 'some value';
deepWork.printAuthor();