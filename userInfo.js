//Task 3
import { namesArray, resultString } from './arrayManipulation.js';
let userIdCounter = 1; // Initialized the ID counter


function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = originalNames.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: userIdCounter++
        };
    });

    return userProfiles;
}

const userProfilesResult = createUserProfiles(namesArray, resultString);
console.log(userProfilesResult);
