package sk.enlightening.my3dsite.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document

@Document
class Video {
    @Id
    private val id: String? = null
    @Indexed
    private val siteId: String? = null
    private var name: String? = null
    private var description: String? = null
    //private var video: Binary? = null
}