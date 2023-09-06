import { Container } from "typedi"
import type { Response, NextFunction } from "express"
import { ZoneService } from "./zone.service"
import { RequestWithUser } from "../../types/auth"

export default class ZoneController {
    public service = Container.get(ZoneService)

    public getZoneDetail = async (req: RequestWithUser, res: Response, next: NextFunction) => {
      try {
        const { zoneId } = req.params
        const detail = await this.service.getZoneDetail(zoneId)
        return res.status(200).json(detail)
      } catch(error: any) {
        console.log(`getZoneDetail Error:`, error.message)
        next(error)
      }
    }
  
    public getParticipatedZone = async (req: RequestWithUser, res: Response, next: NextFunction) => {
      try {
        const uid = req.user?.uid!
        const list = await this.service.getParticipatedZone(uid)
        return res.status(200).json(list ?? [])
      } catch (error) {
        return res.status(404).json("Error 404")
      }
    }

    public participate = async (req: RequestWithUser, res: Response, next: NextFunction) => {
      try {
        const { zone } = req.body
        const uid = req.user?.uid!
        await this.service.participate(uid, zone)
        return res.status(200).json({ msg: "OK" })
      } catch(error) {
        next()
      }
    }

    public leftZone = async (req: RequestWithUser, res: Response) => {
      
    }
    
  }