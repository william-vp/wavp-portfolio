import {NextApiRequest, NextApiResponse} from 'next';

import {sendEmail} from '../../utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const {name, email, subject, message} = req.body;
        await sendEmail({name, email, subject, message});
        return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
};