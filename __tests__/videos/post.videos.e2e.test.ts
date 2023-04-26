import request from "supertest";
import {app} from "../../src/setting";
import {INVALID_STRING, NEW_VIDEO_TEST} from "../../src/utils";


describe('POST /videos', () => {

    describe('When not create video', () => {
        beforeAll(async () => {
            await request(app).delete('/testing/all-data');
        });

        it('should return status code: 400 with incorrect data(title and author)', async () => {
            const res = await request(app).post('/videos').send({
                ...NEW_VIDEO_TEST,
                title: INVALID_STRING,
                author: INVALID_STRING
            }).expect(400).then((el) => el.body);

            expect(res).toEqual({
                errorsMessages: [
                    {
                        message: expect.any(String),
                        field: "title"
                    },
                    {
                        message: expect.any(String),
                        field: "author"
                    }
                ]
            })
        });
    });

    describe('When create video', () => {
        beforeAll(async () => {
            await request(app).delete('/testing/all-data');
        });

        it('should return status code: 201 and created video', async () => {
            const res = await request(app)
                .post('/videos')
                .send(NEW_VIDEO_TEST)
                .expect(201).then((el => el.body));

            expect(res).toEqual({
                ...NEW_VIDEO_TEST,
                id: expect.any(Number),
                canBeDownloaded: false,
                minAgeRestriction: null,
                createdAt: expect.any(String),
                publicationDate: expect.any(String)
            });
        });

        it('should write in DB', async () => {
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