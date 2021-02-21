export class InMemoryDataService {
  createDb() {
    const friends = [
      { id: 1, username: 'Amber', rank: 1 },
      { id: 2, username: 'Cam', rank: 1  },
      { id: 3, username: 'Ellen', rank: 1  },
      { id: 4, username: 'Ian', rank: 1  },
      { id: 5, username: 'Mike', rank: 1  },
    ];
    return { friends };
  }
}
