package sk.enlightening.my3dsite.repository

import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository;
import sk.enlightening.my3dsite.model.User

interface UserRepository : MongoRepository<User?, String?>