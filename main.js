import { crawlPage } from "./crawl.js"

async function main() {
    if (process.argv.length < 3) {
        console.log("no website provided")
        return
    }
    if (process.argv > 3) {
        console.log("too many command line args")
        return
    }

    const baseURL = process.argv[2]

    console.log(`starting crawl of ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {})

    for (const page of Object.entries(pages)) {
        console.log(page)
    }
}

main()