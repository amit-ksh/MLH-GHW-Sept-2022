const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const { ICalendar } = require("datebook");

const icalendar = new ICalendar({
    title: "MLH-GHW-Sept-2022",
    start: new Date("2022-08-10T21:30:00"),
});

request("https://ghw.mlh.io/schedule", (error, response, html) => {
    if (error && response.statusCode != 200) return;
    const $ = cheerio.load(html);

    /**
   * .schedule-day-div h3.date-text -> FOR Date
   * .schedule-day-div .schedule-grid div time -> FOR TIME
   * .schedule-day-div .schedule-grid div a -> FOR LINK
   * .schedule-day-div .schedule-grid div a -> FOR TITLE
   */
    $(".schedule-day-div").each((i, el) => {
        let date = $(el)
            .find("h3.date-text")
            .text()
            .replace(/\s\s+/g, "");
        date = date.slice(0, -5).trim().split(" ")[1];
      
        $(el).find("[role=listitem]").each((i, item) => {
            let [hours, others] = $(item)
                .find(".time")
                .text()
                .replace(/\s\s+/g, "")
                .split(":");
            const [mins, meridiem] = others.trim().split(" ");
            if (meridiem.toLowerCase() === "pm") {
                hours = +hours + 12;
            }
    
            const link = $(item)
                .find("a")
                .attr("href");
      
            const title = $(item)
                .find("a")
                .text()
                .replace(/\s\s+/g, "");
              
            // Adding the event
            const eventConfig = {
                title,
                description: `See event at: ${link}`,
                start: new Date(2022, 8, date, +hours + 9, +mins + 30),
                end: new Date(2022, 8, date, +hours + 11, +mins + 30),
            };
            const event = new ICalendar(eventConfig);
            icalendar
                .addEvent(event)
                .addAlarm({
                    action: "DISPLAY",
                    trigger: {
                        minutes: 30
                    },
                    repeat: 1
                });
        });
    });
  
    fs.writeFile("./GHW-Sept-2022.ics", icalendar.render(), (err) => {
        if (err) return;
    });
});