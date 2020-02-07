const config = require('./config.json');
const Dropbox = require('dropbox').Dropbox;
const fetch = require('isomorphic-fetch');
const dbx = new Dropbox({ accessToken: config.DROPBOX_ACCESS_TOKEN, fetch: fetch });

// dbx.usersGetCurrentAccount()
// .then(console.log)
// .catch(console.log)
// quick API call to verify the SDK is working
// exports.getCurrentAccount = function() {
//     dbx.usersGetCurrentAccount()
//     .then(console.log)
//     .catch(console.log)
// }

exports.addFileMember = function(fileId, userEmail) {
    return new Promise(async(resolve, reject) => {
        const memberSelector = {
            'email': userEmail,
            '.tag': 'email'
        };
        try {
            const fileMember = await dbx.sharingAddFileMember({
                'file': fileId,
                'members': [memberSelector],
                'custom_message': "You have been invited to my file"
            });
            resolve(fileMember);
        } catch(err) {
            reject(err);
        }
    })
}