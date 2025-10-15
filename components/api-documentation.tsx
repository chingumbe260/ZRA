import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function ApiDocumentation() {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">API Documentation</CardTitle>
        <p className="text-sm text-zinc-400">Integration guides and examples for government agencies</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="authentication" className="w-full">
          <TabsList className="bg-zinc-900 w-full justify-start">
            <TabsTrigger value="authentication" className="data-[state=active]:bg-zinc-800">
              Authentication
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="data-[state=active]:bg-zinc-800">
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="examples" className="data-[state=active]:bg-zinc-800">
              Examples
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="data-[state=active]:bg-zinc-800">
              Webhooks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="authentication" className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">API Authentication</h3>
              <p className="text-sm text-zinc-400 mb-4">
                All API requests must include an API key in the Authorization header.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <code className="text-sm text-emerald-400 font-mono">
                  {`curl -X GET https://api.gov.zm/v1/citizens/123456789 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Response Format</h4>
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <code className="text-sm text-zinc-400 font-mono">
                  {`{
  "status": "success",
  "data": {
    "nrc": "123456/78/9",
    "name": "John Doe",
    "verified": true
  }
}`}
                </code>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="endpoints" className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Available Endpoints</h3>
              <div className="space-y-3">
                <div className="border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">GET</Badge>
                    <code className="text-sm text-emerald-400 font-mono">/api/v1/citizens/{"{nrc}"}</code>
                  </div>
                  <p className="text-sm text-zinc-400">Retrieve citizen information by National Registration Card</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">POST</Badge>
                    <code className="text-sm text-emerald-400 font-mono">/api/v1/data/sync</code>
                  </div>
                  <p className="text-sm text-zinc-400">Synchronize data between agencies</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Integration Examples</h3>
              <p className="text-sm text-zinc-400 mb-4">Sample code for common integration scenarios</p>
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <code className="text-sm text-zinc-400 font-mono whitespace-pre">
                  {`// Verify citizen tax compliance
const response = await fetch('https://api.gov.zm/v1/tax/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nrc: '123456/78/9',
    tin: 'TIN123456'
  })
});

const data = await response.json();
console.log(data.compliant); // true/false`}
                </code>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Webhook Configuration</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Configure webhooks to receive real-time notifications when data changes
              </p>
              <div className="space-y-3">
                <div className="border border-zinc-800 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">citizen.updated</h4>
                  <p className="text-sm text-zinc-400">Triggered when citizen information is updated</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">data.synced</h4>
                  <p className="text-sm text-zinc-400">Triggered when data synchronization completes</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
