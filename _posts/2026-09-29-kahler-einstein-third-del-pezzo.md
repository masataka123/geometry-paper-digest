---
layout: paper
title: "The Kähler-Einstein metric on the third Del Pezzo surface"
title_ja: "第三del Pezzo曲面上のKähler–Einstein計量"
authors: "Timothy Buttsworth, William Hadden, Elli Heyes, Daniel Platt, Toby Wiseman"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  The compact four-dimensional manifold $\mathbb{CP}_2\# 3\overline{\mathbb{CP}_2}$ is known to admit a toric Kähler-Einstein metric $g_{\text{KE}}$, but the metric is not known in closed form, which makes it difficult to draw conclusions about its geometry. In this article, we use a combination of analytic and computer-assisted techniques to produce an approximate Einstein metric $g$ described explicitly herein, and also prove that the true Einstein metric $g_{\text{KE}}$ is close to $g$, where both the closeness and the topology are described explicitly. As an application, we prove bounds on the first invariant eigenvalue of the Laplace-Beltrami operator, and prove that this Kähler-Einstein metric does not have positive holomorphic sectional curvature everywhere.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - fano-varieties
  - toric-geometry
  - curvature
arxiv_id: "2609.32655v1"
arxiv_url: "https://arxiv.org/abs/2609.32655"
arxiv_submitted: "2026-09-26"
arxiv_updated: "2026-09-26"
summary: >-
  第三del Pezzo曲面 $\mathbb{CP}^2\#3\overline{\mathbb{CP}^2}$ の閉形式で未知なtoric Kähler–Einstein計量を、明示的な近似解と厳密な誤差評価で捉える。真の計量が近似計量の近傍にあることを証明し、正則断面曲率が全点で正ではないことと対称性を課した第一固有値の評価を導く。
abstract_en: ""
summary_en: >-
  The authors give a certified description of the toric Kähler–Einstein metric on the third del Pezzo surface, which has no known closed formula. They construct an explicit numerical approximation and use interval arithmetic and analytic estimates to prove that a genuine solution lies nearby in a specified Sobolev topology. This permits rigorous spectral bounds and shows that the metric's holomorphic sectional curvature changes sign.
abstract_ja: >-
  第三del Pezzo曲面にはtoric Kähler–Einstein計量が存在するが、閉形式は知られていない。解析と計算機援用手法を組み合わせて明示的な近似Einstein計量を作り、真の計量が指定されたtopologyでその近くにあることを証明する。応用として対称性をもつ第一Laplace–Beltrami固有値を評価し、正則断面曲率が至る所正ではないことを示す。
abstract_source_url: "https://arxiv.org/abs/2609.32655"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.32655](https://arxiv.org/abs/2609.32655)
- **著者:** Timothy Buttsworth, William Hadden, Elli Heyes, Daniel Platt, Toby Wiseman
- **初回投稿日・最終更新日:** 2026年9月26日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$\mathbb{CP}^2\#3\overline{\mathbb{CP}^2}$ はKählerかつtoricなEinstein計量をもつが、その計量は閉形式で知られていない。このため曲率やスペクトルの具体的性質を存在定理だけから取り出すことは難しい。

本論文はsymplectic potentialを数値的に求め、interval arithmeticでEinstein方程式のresidualと幾何量を厳密に囲い込む。さらに解析的摂動論で真のKähler–Einstein計量が近傍に存在すると保証し、計算を証明へ変える。

## 背景と問題設定

Einstein方程式は

$$
\operatorname{Ric}(g)=\lambda g
$$

という弱楕円型の非線形方程式系である。toricかつKählerという対称性の下ではmoment polytope上のscalar PDEへ簡約できるが、数値解が真の解を近似すること自体に厳密な誤差保証が必要となる。

## 主結果

### 近似計量から真の計量への摂動（Theorem 1.2）

論文のAppendix Cで明示される近似Kähler–Einstein計量 $(M_P,\omega_P,g,J)$ に対し、$\varphi\in H^5(M)$ が存在し、

$$
(M_P,\omega_P+i\partial\bar\partial\varphi,J)
$$

は同じKähler類内のKähler–Einstein計量となる。$\|\varphi\|_{H^5(M,g)}$ にも明示的な上界が与えられる。

### 曲率と固有値への応用（Corollaries 1.3 and 1.4）

真の計量 $g_{\mathrm{KE}}$ の正則断面曲率は一様に正ではなく、実際に符号を変える。また $T^2\rtimes D_6$-不変関数上の最初の非零Laplace固有値について、認証された上下界を得る。

## 証明の見取り図

数値的近似から始め、interval arithmeticで曲率、residual、対称関数上のspectral gapを評価する。Einstein方程式の線形化とinverse Laplacianの評価を用いて固定点問題へ書き換え、Banach固定点定理で真の解を構成する。得られたSobolev距離の評価を曲率と固有値の比較へ適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.32655](https://arxiv.org/abs/2609.32655)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Corollaries 1.3 and 1.4
- **論文構成の説明:** pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
