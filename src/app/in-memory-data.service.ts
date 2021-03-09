export class InMemoryDataService {
  createDb() {
    const friends = [
      { id: 1, username: 'Amber', rank: 5 },
      { id: 2, username: 'Cam', rank: 10 },
      { id: 3, username: 'Ellen', rank: 27 },
      { id: 4, username: 'Ian', rank: 3 },
      { id: 5, username: 'Mike', rank: 10 },
      { id: 6, username: 'Jordan', rank: 10 },
      { id: 7, username: 'Kendall', rank: 10 },
    ];

    const users = [
      { id: 11, username: 'Paula', rank: 5 },
      { id: 12, username: 'John', rank: 10 },
      { id: 13, username: 'Rachel', rank: 27 },
      { id: 14, username: 'Robin', rank: 3 },
      { id: 15, username: 'Mitch', rank: 10 },
      { id: 16, username: 'Greg', rank: 10 },
      { id: 17, username: 'Jacob', rank: 10 },
      { id: 21, username: 'Marshall', rank: 5 },
      { id: 22, username: 'Alex', rank: 10 },
      { id: 23, username: 'Jana', rank: 27 },
      { id: 24, username: 'Justin', rank: 3 },
      { id: 25, username: 'Lang', rank: 10 },
      { id: 26, username: 'Joe', rank: 10 },
      { id: 27, username: 'Britt', rank: 10 },
    ]

    return { friends, users };
  }
}
