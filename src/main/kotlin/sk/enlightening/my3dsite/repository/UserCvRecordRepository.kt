package sk.enlightening.my3dsite.repository

import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.data.mongodb.repository.MongoRepository
import sk.enlightening.my3dsite.model.UserCvRecord

@Qualifier
interface UserCvRecordRepository : MongoRepository<UserCvRecord?, ObjectId?> {
    fun findAllByUserId(id: String?): List<UserCvRecord?>?
}