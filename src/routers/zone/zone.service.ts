import { Service } from 'typedi'
import { store } from '../../firebase/firebase.app'
import HttpException from '../../exceptions/http.exception'

import { iZone } from '../../types/zone'


@Service()
export class ZoneService {
  public getParticipatedZone = async (uid: string) => {
    const snapshot = await store.collection("participants").doc(uid).get()
    return snapshot.data()
  }

  public getZoneDetail = async (zoneId: string) => {
    const snapshot = await store.collection("zones").doc(zoneId).get()
    return snapshot.data()
  }

  public participate = async (uid: string, zone: iZone) => {
    const participateList = await store.collection("participants").doc(uid).get()
    if (participateList.exists) {
      const list = participateList.data() as { uid: string, zones: iZone[] }
      const existed = list.zones.find(i => i._id === zone._id)
      if (existed) {
        console.log(`ban da vao room nay roi`)
      } else {
        await store.collection("participants").doc(uid).update({
          uid, zones: [...list.zones, zone]
        })
      }
    } else {
      await store.collection("participants").doc(uid).create({ uid, zones: [zone] })
    }
  }

  public leftZone = async (uid: string, zone: iZone) => {
    const participateList = await store.collection("participants").doc(uid)
    if ((await participateList.get()).exists) {
      await participateList.delete()
    } else {
      throw new HttpException(404, `This zone is not exists`)
    }
  }
}
