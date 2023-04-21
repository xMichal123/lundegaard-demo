package sk.enlightening.my3dsite.web

import com.okta.sdk.client.Client
import com.okta.sdk.resource.user.User
import com.okta.sdk.resource.user.UserList
import com.okta.sdk.resource.user.UserBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RestController
class AdminController {
    @Autowired
    var client: Client? = null

    @GetMapping("/users")
    fun getUsers(): UserList? {
        return client?.listUsers()
    }

    @GetMapping("/user")
    fun searchUserByEmail(@RequestParam query: String?): UserList? {
        return client?.listUsers(query, null, null, null, null)
    }

    @GetMapping("/createUser")
    fun createUser(): User? {
        val tempPassword = charArrayOf('P', 'a', '$', '$', 'w', '0', 'r', 'd')
        return UserBuilder.instance()
            .setEmail("normal.lewis@email.com")
            .setFirstName("Norman")
            .setLastName("Lewis")
            .setPassword(tempPassword)
            .setActive(true)
            .buildAndCreate(client)
    }
}