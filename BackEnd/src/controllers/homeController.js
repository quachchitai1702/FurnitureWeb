import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.Customer.findAll();
        console.log('..................');
        console.log(data);
        console.log('..................');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('about.ejs');

}

// object:{
//     key:'',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}