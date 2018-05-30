import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setConfig, getConfiguration, updateConfig } from './library.configuration.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LibraryService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Promise<any> {
    try {
      const configData = sessionStorage.getItem('libUsers');
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log('error, while fetching all libUsers');
      return Promise.reject('error, while fetching libUsers');
    }
  }
  setUsers() {
    this.http.get('/assets/jsonData/users.json')
      .subscribe(
      response => { sessionStorage.setItem('libUsers', JSON.stringify(response)); },
      err => { console.log('error, while setting booksInLibrary as session storage.'); }
      );
  }

  setCurrentUser(userInd) {
    this.getUsers().then((data) => {
      const currentUser = data[userInd];
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    }).catch((err) => {
      console.log('error while setting current user');
      this.setUsers();
      this.setCurrentUser(userInd);
    });
  }

  getCurrentUser(): Promise<any> {
    try {
      const configData = sessionStorage.getItem('currentUser');
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log('error, while fetching bookInLibrary');
      return Promise.reject('error, while fetching bookInLibrary');
    }
  }

  setBooks() {
    this.http.get('/assets/jsonData/bookList.json')
      .subscribe(
      response => { sessionStorage.setItem('booksInLibrary', JSON.stringify(response)); },
      err => { console.log('error, while setting booksInLibrary as session storage.'); }
      );
  }
  getBooks(): Promise<any> {
    try {
      const configData = sessionStorage.getItem('booksInLibrary');
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log('error, while fetching bookInLibrary');
      return Promise.reject('error, while fetching bookInLibrary');
    }
  }
  updateBooks(bookId, bookData): any {
    try {
      const booksData = JSON.parse(sessionStorage.getItem('booksInLibrary'));
      const bookFoundIndex = booksData.map(data => {
        return data.id;
      }).indexOf(bookId);
      booksData[bookFoundIndex].title = bookData.title;
      booksData[bookFoundIndex].isbn = bookData.isbn;
      booksData[bookFoundIndex].author = bookData.author;
      booksData[bookFoundIndex].genre = bookData.genre;
      booksData[bookFoundIndex].totalPresent = bookData.totalPresent;
      sessionStorage.setItem('booksInLibrary', JSON.stringify(booksData));
      return Promise.resolve('Book Update Successfully.');
    } catch (error) {
      console.log('error, while fetching bookInLibrary');
      return Promise.reject('error, while fetching bookInLibrary');
    }
  }
  getMetadataToIssue(): any {
    return this.http.get('/assets/jsonData/metadataToIssue.json')
      .map(
      response => {
        return response;
      },
      err => {
        return err;
      });
  }


  issueTheBook(bookId, issueBookObj): Promise<any> {
    try {
      const objForBookJson = {
        'user': undefined,

        'fromDate': issueBookObj.fromDate,
        'toDate': undefined,
        'dueDate': issueBookObj.dueDate
      };
      this.getCurrentUser().then(user => {

        user.issuedBooks.push(issueBookObj);
        this.updateInMemory('currentUser', user);

        const allUsers = JSON.parse(sessionStorage.getItem('libUsers'));
        const userFoundIndex = allUsers.map((data) => {
          return data.userId;
        }).indexOf(user.userId);
        allUsers[userFoundIndex].issuedBooks.push(issueBookObj);
        this.updateInMemory('libUsers', allUsers);

        objForBookJson.user = user.email;
        const allBooks = JSON.parse(sessionStorage.getItem('booksInLibrary'));
        const bookFoundIndex = allBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);
        allBooks[bookFoundIndex].issuedTo.push(objForBookJson);
        allBooks[bookFoundIndex].issued = allBooks[bookFoundIndex].issuedTo.length;
        this.updateInMemory('booksInLibrary', allBooks);
      });
      return Promise.resolve('Book Issued Successfully.');
    } catch (err) {
      return Promise.resolve('Book Cant be issued. Please try again later.');
    }
  }

  returnTheBook(bookId, bookReturnObj): Promise<any> {
    try {
      this.getCurrentUser().then(user => {

        const bookFoundInCurrentUser = user.issuedBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);

        user.logs.push(bookReturnObj);


        const allUsers = JSON.parse(sessionStorage.getItem('libUsers'));
        const userFoundIndex = allUsers.map((data) => {
          return data.userId;
        }).indexOf(user.userId);

        allUsers[userFoundIndex].logs.push(bookReturnObj);


        const allBooks = JSON.parse(sessionStorage.getItem('booksInLibrary'));
        const bookFoundIndex = allBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);
        const userFoundToRetuenInAllBook = allBooks[bookFoundIndex].issuedTo.map(data => {
          return data.user;
        }).indexOf(user.email);

        user.issuedBooks.splice(bookFoundInCurrentUser, 1);
        this.updateInMemory('currentUser', user);

        allUsers[userFoundIndex].issuedBooks.splice(bookFoundInCurrentUser, 1);
        this.updateInMemory('libUsers', allUsers);

        allBooks[bookFoundIndex].issuedTo.splice(userFoundToRetuenInAllBook, 1);
        allBooks[bookFoundIndex].issued = allBooks[bookFoundIndex].issuedTo.length;
        this.updateInMemory('booksInLibrary', allBooks);
      });
      return Promise.resolve('Book Returned Successfully.');
    } catch (err) {
      return Promise.resolve('Book Cant be returned now. Please try again later.');
    }
  }



  setConfiguration() {
    setConfig(this.http);
  }
  getConfiguration(): Promise<any> {
    return getConfiguration();
  }
  updateConfig(data): Promise<any> {
    return updateConfig(data);
  }



  updateInMemory(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getInMemoryData(key): Promise<any> {
    try {
      const data = sessionStorage.getItem(key);
      return Promise.resolve(JSON.parse(data));
    } catch (exception) {
      return Promise.reject('Unable to get data from in memory');
    }
  }



}
