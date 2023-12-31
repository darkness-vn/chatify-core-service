import { auth } from "../firebase/firebase.app"
import { Response, NextFunction } from "express"
import HttpException from "../exceptions/http.exception"
import { RequestWithUser } from "../types/auth"

const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {

    const idToken = req.header("Authorization") || req.body.idToken
    console.log(`Request:`, req.url)
    if (!idToken) {
        return next(new HttpException(401, 'accessToken must be provided'))
    }

    try {
        const userPayload = await auth.verifyIdToken(idToken as string)
        req.user = userPayload
        return next()
    } catch(error) {
        console.log(19, error)
        return next(new HttpException(401, 'Can not authenticate'))
    }

}

export default AuthMiddleware