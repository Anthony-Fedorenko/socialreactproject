import React from "react";
import profileReducer, {actions} from "./profileReducer";
import {ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are U', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 25}
    ],
    profile: null,
    status: '',
    newPostText: ''
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator('Anthony-Fed')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator('Anthony-Fed')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('Anthony-Fed')
})

it('after deleting length of messages should decrement', () => {
    // 1. test data
    let action = actions.deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1)
})

it(`after deleting length of messages shouldn't decrement if id isn't correct`, () => {
    // 1. test data
    let action = actions.deletePost(10)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
})