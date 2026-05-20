import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";


const loader = new PDFLoader("./story.pdf")

const docs = await loader.load()

console.log(docs)

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 0 })
const texts = await splitter.splitText(docs.pageContent)

console.log(texts)