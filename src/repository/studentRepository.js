import React, { Component } from 'react';
import App from './App'
import StudentsList from './components/StudentsList'


export const listStudents = () => {
    return (
        <StudentsList data={this.state.data}/>
    ); // replace the empty array with actual array with at least 5 student objects
}
