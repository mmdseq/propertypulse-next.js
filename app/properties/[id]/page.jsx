import BookmarkButton from "@/components/BookmarkButton"
import PropertyContactForm from "@/components/PropertyContactForm"
import PropertyDetails from "@/components/PropertyDetails"
import PropertyHeaderImage from "@/components/PropertyHeaderImage"
import PropertyImages from "@/components/PropertyImages"
import ShareButtons from "@/components/ShareButtons"
import connectDB from "@/lib/mongodb"
import Property from "@/models/Property"
import { convertToSerializeableObject } from "@/utils/convertToObject"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

const PropertyPage = async ({ params }) => {
  await connectDB()

  // Explicitly await the dynamic `params` resolution
  const { id } = await params

  // Fetch the property details

  const propertyDoc = await Property.findById(id).lean()
  const property = convertToSerializeableObject(propertyDoc)

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        property Not Found
      </h1>
    )
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          {/* <div className="grid grid- w-full gap-6">
            <PropertyDetails property={property} />
            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
            </aside>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            <div>
              <PropertyDetails property={property} />
            </div>
            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  )
}

export default PropertyPage
