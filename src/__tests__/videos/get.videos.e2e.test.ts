import {app} from "../../app";
import {NEW_VIDEO_TEST} from "../../utils";
import request from "supertest";


describe('GET /videos', () => {

    describe('When data not exist', () => {
        beforeAll(async () => {
            await request(app).delete('/testing/all-data');
        });

        it('should return status code: 200 and empty array', async () => {
            await request(app).get('/videos').expect(200, []);
        });
    });

    describe('When data exist', () => {
        beforeAll(async () => {
            await request(app).delete('/testing/all-data');
            await request(app)
                .post('/videos')
                .send(NEW_VIDEO_TEST)
        });

        it('should return status code: 200 and expected data', async () => {
            const res = await request(app).get('/videos').then((el) => el.body);
            expect(res[0]).toEqual({
                ...NEW_VIDEO_TEST,
                id: expect.any(Number),
                canBeDownloaded: false,
                minAgeRestriction: null,
                createdAt: expect.any(String),
                publicationDate: expect.any(String)
            });
            expect(res.length).toBe(1);
        });
    });
});