const ArticaleModel = require('../models/Articale.model')
const ContentModel = require('../models/Content.model')
const ShowcaseModel = require('../models/Showcase.model')


// Create a new articale
const createArticale = async (req, res) => {
    const { slug, title, banner_url, type, guide_url, privacy, content, lang } = req.body

    if (!slug || !title || !banner_url || !type || !privacy || !content || !lang) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }


    try {
        const slugExists = await ArticaleModel.find({ slug })
        if (slugExists.length !== 0) {
            return res
                .status(400)
                .json({ success: false, message: "This slug is taken!" });
        }

        const newContent = await ContentModel.create({
            slug, content
        })

        const newArticale = await ArticaleModel.create({
            slug, title, banner_url, type, guide_url, privacy, lang
        })

        if (!newContent || !newArticale) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Articale created successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }

}

// Get a single articale
const getArticale = async (req, res) => {
    const { slug } = req.params

    try {
        const content = await ContentModel.find({ slug })
        const articale = await ArticaleModel.find({ slug })


        if (!content || !articale) {
            res.status(403).json({ success: false, message: "Articale doesn't exist!" });
        }

        return res.status(200).json({
            success: true,
            articale,
            content
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}


// Edit a articale
const editArticale = async (req, res) => {
    const { slug } = req.params

    try {
        const newcontent = await ContentModel.findOneAndUpdate({ slug }, req.body, { new: true })
        const newarticale = await ArticaleModel.findOneAndUpdate({ slug }, req.body, { new: true })


        if (!newcontent || !newarticale) {
            res.status(403).json({ success: false, message: "Articale doesn't exist!" });
        }

        return res.status(200).json({
            success: true,
            message: 'Articale updated successfully!'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Delete a articale
const deleteArticale = async (req, res) => {
    const { slug } = req.params

    try {
        const confirmationContent = await ContentModel.findOneAndDelete({ slug })
        const confirmationArticale = await ArticaleModel.findOneAndDelete({ slug })

        if (!confirmationContent || !confirmationArticale) {
            res.status(403).json({ success: false, message: "Articale doesn't exist!" });
        }

        return res.status(200).json({
            success: true,
            message: 'Articale deleted successfully!',
            confirmationContent,
            confirmationArticale
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get all articales
const getAllArticales = async (req, res) => {
    try {
        const articales = await ArticaleModel.find()

        if (!articales) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Articales fetched successfully!',
            articales
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}


// Get public articales
const getPublicArticales = async (req, res) => {
    try {
        const articales = await ArticaleModel.find({ privacy: 'Public', lang: 'FR' })

        if (!articales) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Public articales fetched successfully!',
            articales
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get public articales
const getPublicEngArticales = async (req, res) => {
    try {
        const articales = await ArticaleModel.find({ privacy: 'Public', lang: 'EN' })

        if (!articales) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Public articales fetched successfully!',
            articales
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Add showcase
const addShowcase = async (req, res) => {
    const { slug_one, slug_one_fr, slug_two, slug_two_fr, slug_three, slug_three_fr, slug_four, slug_four_fr, slug_five, slug_five_fr, slug_six, slug_six_fr, slug_seven, slug_seven_fr } = req.body

    try {

        const articleOne = await ArticaleModel.findOne({ slug: slug_one })
        const popular = {
            slug: articleOne.slug,
            title: articleOne.title,
            banner_url: articleOne.banner_url,
            type: articleOne.type
        }

        //fr
        const articleOneFr = await ArticaleModel.findOne({ slug: slug_one_fr })
        const popular_fr = {
            slug: articleOneFr.slug,
            title: articleOneFr.title,
            banner_url: articleOneFr.banner_url,
            type: articleOneFr.type
        }

        const articleTwo = await ArticaleModel.findOne({ slug: slug_two })
        const featured_big = {
            slug: articleTwo.slug,
            title: articleTwo.title,
            banner_url: articleTwo.banner_url,
            type: articleTwo.type
        }
        //fr
        const articleTwoFr = await ArticaleModel.findOne({ slug: slug_two_fr })
        const featured_big_fr = {
            slug: articleTwoFr.slug,
            title: articleTwoFr.title,
            banner_url: articleTwoFr.banner_url,
            type: articleTwoFr.type
        }

        const articleThree = await ArticaleModel.findOne({ slug: slug_three })
        const featured_small_one = {
            slug: articleThree.slug,
            title: articleThree.title,
            banner_url: articleThree.banner_url,
            type: articleThree.type
        }

        //fr
        const articleThree_fr = await ArticaleModel.findOne({ slug: slug_three_fr })
        const featured_small_one_fr = {
            slug: articleThree_fr.slug,
            title: articleThree_fr.title,
            banner_url: articleThree_fr.banner_url,
            type: articleThree_fr.type
        }

        const articleFour = await ArticaleModel.findOne({ slug: slug_four })
        const featured_small_two = {
            slug: articleFour.slug,
            title: articleFour.title,
            banner_url: articleFour.banner_url,
            type: articleFour.type
        }

        //fr
        const articleFour_fr = await ArticaleModel.findOne({ slug: slug_four_fr })
        const featured_small_two_fr = {
            slug: articleFour_fr.slug,
            title: articleFour_fr.title,
            banner_url: articleFour_fr.banner_url,
            type: articleFour_fr.type
        }

        const articleFive = await ArticaleModel.findOne({ slug: slug_five })
        const featured_smallest_one = {
            slug: articleFive.slug,
            title: articleFive.title,
            banner_url: articleFive.banner_url,
            type: articleFive.type
        }

        //fr
        const articleFive_fr = await ArticaleModel.findOne({ slug: slug_five_fr })
        const featured_smallest_one_fr = {
            slug: articleFive_fr.slug,
            title: articleFive_fr.title,
            banner_url: articleFive_fr.banner_url,
            type: articleFive_fr.type
        }

        const articleSix = await ArticaleModel.findOne({ slug: slug_six })
        const featured_smallest_two = {
            slug: articleSix.slug,
            title: articleSix.title,
            banner_url: articleSix.banner_url,
            type: articleSix.type
        }

        //fr
        const articleSix_fr = await ArticaleModel.findOne({ slug: slug_six_fr })
        const featured_smallest_two_fr = {
            slug: articleSix_fr.slug,
            title: articleSix_fr.title,
            banner_url: articleSix_fr.banner_url,
            type: articleSix_fr.type
        }

        const articleSeven = await ArticaleModel.findOne({ slug: slug_seven })
        const featured_smallest_three = {
            slug: articleSeven.slug,
            title: articleSeven.title,
            banner_url: articleSeven.banner_url,
            type: articleSeven.type
        }

        //fr
        const articleSeven_fr = await ArticaleModel.findOne({ slug: slug_seven_fr })
        const featured_smallest_three_fr = {
            slug: articleSeven_fr.slug,
            title: articleSeven_fr.title,
            banner_url: articleSeven_fr.banner_url,
            type: articleSeven_fr.type
        }

        const showcase = ShowcaseModel.create({
            popular, featured_big, featured_small_one, featured_small_two, featured_smallest_one, featured_smallest_two, featured_smallest_three,
            popular_fr, featured_big_fr, featured_small_one_fr, featured_small_two_fr, featured_smallest_one_fr, featured_smallest_two_fr, featured_smallest_three_fr
        })

        if (!showcase) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Showcase created successfully!',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }

}

// Get showcase
const getShowcase = async (req, res) => {
    try {
        const showcase = await ShowcaseModel.find()

        if (!showcase) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Showcase fetched successfully!',
            showcase
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Update showcase
const updateShowcase = async (req, res) => {
    const { slug_one, slug_two, slug_three, slug_four, slug_five, slug_six, slug_seven, id, slug_one_fr, slug_two_fr, slug_three_fr, slug_four_fr, slug_five_fr, slug_six_fr, slug_seven_fr } = req.body

    try {

        let data = {}

        if (slug_one) {
            const articleOne = await ArticaleModel.findOne({ slug: slug_one })
            data.popular = {
                slug: articleOne.slug,
                title: articleOne.title,
                banner_url: articleOne.banner_url,
                type: articleOne.type
            }
        }

        //fr
        if (slug_one_fr) {
            const articleOne_fr = await ArticaleModel.findOne({ slug: slug_one_fr })
            data.popular_fr = {
                slug: articleOne_fr.slug,
                title: articleOne_fr.title,
                banner_url: articleOne_fr.banner_url,
                type: articleOne_fr.type
            }
        }


        if (slug_two) {
            const articleTwo = await ArticaleModel.findOne({ slug: slug_two })
            data.featured_big = {
                slug: articleTwo.slug,
                title: articleTwo.title,
                banner_url: articleTwo.banner_url,
                type: articleTwo.type
            }
        }

        //fr
        if (slug_two_fr) {
            const articleTwo_fr = await ArticaleModel.findOne({ slug: slug_two_fr })
            data.featured_big_fr = {
                slug: articleTwo_fr.slug,
                title: articleTwo_fr.title,
                banner_url: articleTwo_fr.banner_url,
                type: articleTwo_fr.type
            }
        }

        if (slug_three) {
            const articleThree = await ArticaleModel.findOne({ slug: slug_three })
            data.featured_small_one = {
                slug: articleThree.slug,
                title: articleThree.title,
                banner_url: articleThree.banner_url,
                type: articleThree.type
            }
        }

        //fr
        if (slug_three_fr) {
            const articleThree_fr = await ArticaleModel.findOne({ slug: slug_three_fr })
            data.featured_small_one_fr = {
                slug: articleThree_fr.slug,
                title: articleThree_fr.title,
                banner_url: articleThree_fr.banner_url,
                type: articleThree_fr.type
            }
        }

        if (slug_four) {
            const articleFour = await ArticaleModel.findOne({ slug: slug_four })
            data.featured_small_two = {
                slug: articleFour.slug,
                title: articleFour.title,
                banner_url: articleFour.banner_url,
                type: articleFour.type
            }
        }

        //fr
        if (slug_four_fr) {
            const articleFour_fr = await ArticaleModel.findOne({ slug: slug_four_fr })
            data.featured_small_two_fr = {
                slug: articleFour_fr.slug,
                title: articleFour_fr.title,
                banner_url: articleFour_fr.banner_url,
                type: articleFour_fr.type
            }
        }



        if (slug_five) {
            const articleFive = await ArticaleModel.findOne({ slug: slug_five })
            data.featured_smallest_one = {
                slug: articleFive.slug,
                title: articleFive.title,
                banner_url: articleFive.banner_url,
                type: articleFive.type
            }
        }

        //fr
        if (slug_five_fr) {
            const articleFive_fr = await ArticaleModel.findOne({ slug: slug_five_fr })
            data.featured_smallest_one_fr = {
                slug: articleFive_fr.slug,
                title: articleFive_fr.title,
                banner_url: articleFive_fr.banner_url,
                type: articleFive_fr.type
            }
        }

        if (slug_six) {
            const articleSix = await ArticaleModel.findOne({ slug: slug_six })
            data.featured_smallest_two = {
                slug: articleSix.slug,
                title: articleSix.title,
                banner_url: articleSix.banner_url,
                type: articleSix.type
            }
        }
        //fr
        if (slug_six_fr) {
            const articleSix_fr = await ArticaleModel.findOne({ slug: slug_six_fr })
            data.featured_smallest_two_fr = {
                slug: articleSix_fr.slug,
                title: articleSix_fr.title,
                banner_url: articleSix_fr.banner_url,
                type: articleSix_fr.type
            }
        }


        if (slug_seven) {
            const articleSeven = await ArticaleModel.findOne({ slug: slug_seven })
            data.featured_smallest_three = {
                slug: articleSeven.slug,
                title: articleSeven.title,
                banner_url: articleSeven.banner_url,
                type: articleSeven.type
            }
        }

        //fr
        if (slug_seven_fr) {
            const articleSeven_fr = await ArticaleModel.findOne({ slug: slug_seven_fr })
            data.featured_smallest_three_fr = {
                slug: articleSeven_fr.slug,
                title: articleSeven_fr.title,
                banner_url: articleSeven_fr.banner_url,
                type: articleSeven_fr.type
            }
        }



        const updatedshowcase = ShowcaseModel.findByIdAndUpdate(id, data, { new: true }, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated User : ", docs);
            }
        })


        if (!updatedshowcase) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: 'Showcase created successfully!',

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

module.exports = { createArticale, getArticale, editArticale, deleteArticale, getAllArticales, getPublicArticales, addShowcase, getShowcase, updateShowcase, getPublicEngArticales }