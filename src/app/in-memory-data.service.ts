export class InMemoryDataService {
  createDb() {
    const friends = [
      { id: 1, username: 'Amber', rank: 5 },
      { id: 2, username: 'Cam', rank: 10 },
      { id: 3, username: 'Ellen', rank: 27 },
      { id: 4, username: 'Ian', rank: 3 },
      { id: 5, username: 'Mike', rank: 10 },
    ];
    return { friends };
  }
}
