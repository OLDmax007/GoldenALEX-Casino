const logotypes = {
    images: [
        "./images/container-logos/adcombo.png",
        "./images/container-logos/stada.png",
        "./images/container-logos/affstar.png",
        "./images/container-logos/marketplace.png",
        "./images/container-logos/serious.png",
        "./images/container-logos/aeus.png",
    ],

    createTable: function (tableClass) {
        let $table = $(
            "<table class='" + tableClass + "'><tr><tr><tr></table>"
        );
        $(".container-logos").append($table);
        $("." + tableClass + " tr").each(function () {
            while ($(this).find("td").length < 6) {
                $(this).append("<td></td>");
            }
        });
        return "." + tableClass;
    },

    appendImageInTd: function (nameTable) {
        const self = this;
        $(this.createTable(nameTable) + " tr").each(function () {
            let count = 0;
            let imagesCheck = [];
            while (imagesCheck.length < $(this).find("td").length) {
                let randomImage = Math.floor(
                    Math.random() * self.images.length
                );
                if (!imagesCheck.includes(self.images[randomImage])) {
                    imagesCheck.push(self.images[randomImage]);
                    $(this)
                        .find("td")
                        .eq([count])
                        .append("<img src=" + self.images[randomImage] + ">");
                    count++;
                }
            }
        });
    },

    reacreateTable: function (nameTable) {
        setInterval(function () {
            $("." + nameTable).remove();
            logotypes.appendImageInTd(nameTable);
        }, 500);
    },
};

logotypes.appendImageInTd("table-logs");
logotypes.reacreateTable("table-logs");

const changeLanguages = {
    englishSentences: {
        ".login": "Login up",
        ".register": "Sign up",
        ".title1-main": "EXCLUSIVE<br>",
        ".title2-main": "partners program",
        ".paragraph-main":
            "We do offer profitables individual conditions. <br> Register and start working together with us",
        ".join_one": "Join to",
        ".title1-adv": "OUR<br>",
        ".title2-adv": "ADVANTAGES",
        ".p1-tab_adv": "Real-time detailed static",
        ".p2-tab_adv": "Fast pays-out",
        ".p3-tab_adv": "Carriageable personal the room",
        ".p4-tab_adv": "Advanced personal the manager",
        ".p5-tab_adv": "Exclusive promotional materials",
        ".p6-tab_adv": "Unique conditions for top partners",
        ".join_two": "Join to",
        ".tab-work_h1": "20$",
        ".tab-work_h2": "TRAFFIC ON GEO",
        ".tab-work_h3": "EXCEPTIONS",
        ".tab-work_h4": "24/7",
        ".tab-work_h5": "STATS",
        ".tab-work_h6": "CREATEVS",
        ".tab-work_p1": "PAID PURPOSE: <br>SAVINGS <br>BASELINE $7",
        ".tab-work_p2":
            "RUSSIA, UZBEKISTAN, <br>VIETNAM, MALAYSIA, <br>THAILAND, INDONESIA",
        ".tab-work_p3":
            "HOLDDAD TIME FOR NEWLY <br>CONNECTED <br>PARNERS - 14 DAYS.",
        ".tab-work_p4": "PERSONAL <br> MANAGER WITH YOU <br> ON CALL",
        ".tab-work_p5": "COMPLETE STATISTICS <br> In REAL TIME",
        ".tab-work_p6": "PROVIDED <br> OUR CREATIVES PACKAGE.",
        ".if_works_1": "WORKING",
        ".if_works_2": "CONDITIONS COMPARE",
        ".span-partners": "PARTENRS",
        ".span-reviews": "REVIEWS",
        ".text-in_h1": "D’Paz Company",
        ".text-in_p1": "Official dealer of the company",
        ".but1-tab-foot": "Our channel",
        ".but2-tab-foot": "Communicate",
        ".contacts": "CONTACTS",
    },

    russianSentences: {},

    createRussianSentences: function () {
        let russianSentences = {};
        for (let key of Object.keys(this.englishSentences)) {
            russianSentences[key] = $(key).html();
        }
        return russianSentences;
    },



    animateChar: function (elm, obj) {
        let textElm = obj[elm];
        $(elm).empty();

        for (let char = 0; char < textElm.length; char++) {
            if (textElm[char] == "<" && textElm[char + 3] == ">") {
                $(elm).append($("<br>"));
                char += 3;
            } else if (textElm[char] === " ") {
                $(elm).append(" ");
            } else {
                let letter = $(
                    "<div style='display: inline-block;'>" +
                        textElm[char] +
                        "</div>"
                );
                $(elm).append(letter);
                letter.hide();
                setTimeout(function () {
                    letter.fadeIn(500);
                }, char * 30);
            }
        }
    },

    changeLogoRuOrEng: function (elm) {
        const logos = {
                eng: "<img src='images/header/eng.png' class='eng' style='width: 16px'></img>",
                ru:  "<img src='images/header/ru.png' class='ru'></img>",
            };

            $(elm).empty()
            const value = $(".languages").val();
            value === "eng"
                ? $(elm).append(logos.eng)
                : $(elm).append(logos.ru);
            
            $(elm).hide().fadeIn(1000);
    },

    changeLanguageRuOrEng: function (elm) {
        const value = $(elm).val();
        const sentences = value === "eng" ? this.englishSentences : this.russianSentences;

        for (let elm of Object.keys(sentences)) {
            this.animateChar(elm, sentences);
        }
    },
};


changeLanguages.russianSentences = changeLanguages.createRussianSentences();

$(".languages").change(function () {
    changeLanguages.changeLanguageRuOrEng(".languages");
    changeLanguages.changeLogoRuOrEng(".logoLanguage");
});

