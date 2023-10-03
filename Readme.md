## Getting Started

## Requirements
- Node.js 16.14 or later.
- npm. (npm install -g npm)
- Verify installs with "node -v" and "npm -v".

## Connecting to MongoDB
- First create a MongoDb atlas account if not already.
- Deploy a free cluster. (Creating a cluster will automatically deploy it.)
- Create `Database access credentials`.
- Create a Database and collection in that cluster.
- Recommended to use Database name: `f1_data` and Collection name: `drivers`. If you choose your own names then make sure you replace the `dbName` and `collectionName` with your respective names in `index.js`.
- Insert the sample data present in `F1DriversDataset.csv` directly into collection. Insert the `csv` file in mongoDB database.
- After that click on `Connect`, to connect with cluster.
- Click on `Add Current IP Address`.
- Then choose `Drivers` method to connect with application.
- Choose `Node.js` driver and copy your `connection string`.
- Then in the file `index.js` replace with `url` present, and enter your password of `Database access credentials` by removing `<password>`, make sure to also remove `<>` in that string.

## Running local MongoDB server
- Execute `node index-express.js` command.
- `Successfully connected to Atlas` and `app listening on port http://localhost:5000` should be displayed in the terminal.
- If you are getting `time-out` error, then reload your cluster in MongoDB Atlas and re-add the IP Address by clicking on `Add Current IP Address`. Then try running command again. 