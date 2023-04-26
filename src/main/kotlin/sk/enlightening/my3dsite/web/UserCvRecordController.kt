package sk.enlightening.my3dsite.web

import jakarta.validation.Valid
import org.bson.types.ObjectId
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.web.bind.annotation.*
import sk.enlightening.my3dsite.model.User
import sk.enlightening.my3dsite.model.UserCvRecord
import sk.enlightening.my3dsite.repository.UserCvRecordRepository
import sk.enlightening.my3dsite.repository.UserRepository
import java.net.URI
import java.net.URISyntaxException
import java.security.Principal
import java.util.*
import java.util.function.Function


@RestController
@RequestMapping("/api")
internal class UserCvRecordController(userCvRecordRepository: UserCvRecordRepository, userRepository: UserRepository) {
    private val log = LoggerFactory.getLogger(UserCvRecordController::class.java)
    private val userCvRecordRepository: UserCvRecordRepository
    private val userRepository: UserRepository

    init {
        this.userCvRecordRepository = userCvRecordRepository
        this.userRepository = userRepository
    }

    @GetMapping("/records")
    fun records(@AuthenticationPrincipal principal: OAuth2User): List<UserCvRecord?>? {
        val details = principal.attributes
        val userId = details["sub"].toString()
        return userCvRecordRepository.findAllByOktaUserId(userId)
    }

    @GetMapping("/record/{id}")
    fun getRecord(@PathVariable id: ObjectId?): ResponseEntity<*> {
        val groupNullable: Optional<UserCvRecord?> = userCvRecordRepository.findById(id!!)
        val group: Optional<UserCvRecord> = groupNullable.map { it }
        return group.map<ResponseEntity<Any>>(Function<UserCvRecord, ResponseEntity<Any>> { response: UserCvRecord ->
            ResponseEntity.ok().body<Any>(response)
        })
            .orElse(ResponseEntity<Any>(HttpStatus.NOT_FOUND))
    }

    @PostMapping("/record")
    @Throws(URISyntaxException::class)
    fun createRecord(
        @RequestBody userCvRecord: @Valid UserCvRecord?,
        @AuthenticationPrincipal principal: OAuth2User
    ): ResponseEntity<UserCvRecord> {
        log.info("Request to create record: {}", userCvRecord)
        val details = principal.attributes
        val userId = details["sub"].toString()

        // check to see if user already exists
        //val userNullable: Optional<User?> = userRepository.findById(userId)
        //val user: Optional<User> = userNullable.map { it }
        if (userCvRecord != null) {
            userCvRecord.oktaUserId = userId
        }
        val result: UserCvRecord? = userCvRecordRepository.save(userCvRecord!!)
        if (result != null) {
            return ResponseEntity.created(URI("/api/record/" + result.id))
                .body<UserCvRecord>(result)
        } else {
            return ResponseEntity.created(URI("/api/record/notFound"))
                .body<UserCvRecord>(null)
        }
    }

    @PutMapping("/record/{id}")
    fun updateRecord(@RequestBody userCvRecord: @Valid UserCvRecord?): ResponseEntity<UserCvRecord> {
        log.info("Request to update record: {}", userCvRecord)
        val result: UserCvRecord? = userCvRecordRepository.save(userCvRecord!!)
        return ResponseEntity.ok().body<UserCvRecord>(result)
    }

    @DeleteMapping("/record/{id}")
    fun deleteRecord(@PathVariable id: ObjectId?): ResponseEntity<*> {
        log.info("Request to delete record: {}", id)
        userCvRecordRepository.deleteById(id!!)
        return ResponseEntity.ok().build<Any>()
    }
}