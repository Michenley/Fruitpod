import React from "react";
import { products, categories } from "../data/products";

const Admin = () => {
  const totalProducts = products.length;
  const totalFeatured = products.filter((p) => p.featured).length;
  const avgPrice =
    products.length > 0
      ? (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(
          1
        )
      : 0;

  const productsByCategory = categories.map((cat) => ({
    category: cat,
    count: products.filter((p) => p.category === cat).length,
  }));

  const cardBase = {
    borderRadius: "16px",
    padding: "18px 20px",
    background: "#ffffff",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 6vw 64px",
        background:
          "radial-gradient(circle at top left, #fef9c3 0, #f5f3ff 35%, #ecfeff 70%, #ffffff 100%)",
      }}
    >
      {/* Top heading */}
      <section style={{ maxWidth: 1100, margin: "0 auto 28px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: 4,
          }}
        >
          Admin Dashboard
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14 }}>
          Internal overview of Fruitpod menu items, categories and featured
          picks. (UI only – no real database yet.)
        </p>
      </section>

      {/* KPI cards */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto 28px",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ ...cardBase, flex: "1 1 220px" }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 6,
            }}
          >
            Total items
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700 }}>{totalProducts}</span>
            <span
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#ecfeff",
                color: "#0284c7",
                fontWeight: 500,
              }}
            >
              Live menu
            </span>
          </div>
        </div>

        <div style={{ ...cardBase, flex: "1 1 220px" }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 6,
            }}
          >
            Featured items
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700 }}>
              {totalFeatured}
            </span>
            <span
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#fef3c7",
                color: "#b45309",
                fontWeight: 500,
              }}
            >
              Homepage highlights
            </span>
          </div>
        </div>

        <div style={{ ...cardBase, flex: "1 1 220px" }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 6,
            }}
          >
            Avg. price (₵)
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700 }}>₵{avgPrice}</span>
            <span
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 999,
                background: "#ecfdf5",
                color: "#047857",
                fontWeight: 500,
              }}
            >
              Balanced pricing
            </span>
          </div>
        </div>
      </section>

      {/* Main grid: table + side panel */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr)",
          gap: 20,
        }}
      >
        {/* Menu items table */}
        <div style={cardBase}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                Menu items
              </h2>
              <p style={{ fontSize: 13, color: "#9ca3af" }}>
                Quick snapshot of what’s on Fruitpod right now.
              </p>
            </div>
            <button
              type="button"
              style={{
                borderRadius: 999,
                border: "1px solid #d4d4d8",
                background: "#f9fafb",
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              + New item (mock)
            </button>
          </div>

          <div
            style={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead
                style={{
                  background: "#f9fafb",
                  textAlign: "left",
                  color: "#6b7280",
                }}
              >
                <tr>
                  <th style={{ padding: "10px 14px" }}>Item</th>
                  <th style={{ padding: "10px 14px" }}>Category</th>
                  <th style={{ padding: "10px 14px" }}>Price (₵)</th>
                  <th style={{ padding: "10px 14px" }}>Tags</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr
                    key={p.id}
                    style={{
                      borderTop: "1px solid #f1f5f9",
                      background: "#ffffff",
                    }}
                  >
                    <td style={{ padding: "10px 14px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <img
                          src={p.image}
                          alt={p.alt}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontWeight: 500,
                              fontSize: 13,
                              marginBottom: 2,
                            }}
                          >
                            {p.name}
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "#9ca3af",
                              maxWidth: 230,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {p.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "10px 14px", color: "#6b7280" }}>
                      {p.category}
                    </td>
                    <td
                      style={{
                        padding: "10px 14px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      ₵{p.price}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {p.tags?.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 11,
                              padding: "3px 8px",
                              borderRadius: 999,
                              background:
                                tag === "Best seller"
                                  ? "#fef3c7"
                                  : tag === "Vegan"
                                  ? "#ecfdf5"
                                  : "#eef2ff",
                              color:
                                tag === "Best seller"
                                  ? "#b45309"
                                  : tag === "Vegan"
                                  ? "#047857"
                                  : "#4f46e5",
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {p.featured && (
                          <span
                            style={{
                              fontSize: 11,
                              padding: "3px 8px",
                              borderRadius: 999,
                              background: "#eff6ff",
                              color: "#1d4ed8",
                              fontWeight: 500,
                            }}
                          >
                            Homepage
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side analytics panel */}
        <aside style={cardBase}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            Category overview
          </h2>
          <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>
            Quick glance at how many items you offer in each part of the menu.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {productsByCategory.map((row) => (
              <div
                key={row.category}
                style={{
                  borderRadius: 999,
                  background: "#f9fafb",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "#22c55e",
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>
                    {row.category}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontVariantNumeric: "tabular-nums",
                    color: "#6b7280",
                  }}
                >
                  {row.count} item{row.count !== 1 ? "s" : ""}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              paddingTop: 14,
              borderTop: "1px dashed #e5e7eb",
              fontSize: 12,
              color: "#9ca3af",
            }}
          >
            Next step: wire this UI to a real backend or Google Sheet so changes
            here update the live menu automatically.
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Admin;
