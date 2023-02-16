const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const band1 = await Band.create({
            name: 'Shed 7', genre: 'indie'
        })
        expect(band1.name).toBe('Shed 7');
        expect(band1.genre).toBe('indie');
    })

    test('can create a Musician', async () => {
        const muso1 = await Musician.create({
            name: 'Tim Minchin', instrument: 'piano'
        })
        expect(muso1.name).toBe('Tim Minchin');
        expect(muso1.instrument).toBe('piano');
    })
})