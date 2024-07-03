// task_5/js/main.ts

// Interfaces
interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

// Functions
function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    return {
        credits: subject1 + subject2,
        brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    return {
        credits: subject1 + subject2,
        brand: 'MinorCredits'
    };
}

// Export Interfaces and Functions
export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
