---
layout: paper
title: "The Chern character of a coherent sheaf on a smooth projective hypersurface"
title_ja: "滑らかな射影超曲面上の連接層のChern指標"
authors: "David Favero, Tyler L. Kelly"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Given a coherent sheaf on a smooth projective hypersurface X, we prove an explicit formula for its Chern character as a Cech cocycle in terms of the free resolution of the associated module and calculate its image in the Jacobian ring under the Griffiths residue map. The formula is a geometric analogue of the Kapustin-Li formula for Landau-Ginzburg models, but proven directly using Hodge-theoretic techniques. This yields an effective method to compute the primitive part of the Chern character of any coherent sheaf using commutative algebra. We finish by proving the Hodge conjecture for the degree 33 Fermat fourfold.
topic: algebraic-geometry
tags:
  - chern-classes
  - vector-bundles-sheaves
  - hodge-theory
arxiv_id: "2609.12759v1"
arxiv_url: "https://arxiv.org/abs/2609.12759"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  滑らかな射影超曲面上の任意の連接層について、自由分解の行列因子化からChern指標をČech cocycleおよびJacobian環の元として明示する。この計算法を代数的サイクルの探索に応用し、次数33のFermat四次元多様体に対するHodge予想を証明する。
abstract_en: ""
summary_en: >-
  The authors turn an eventual matrix factorization of a module over a hypersurface ring into explicit representatives for the Chern character of the associated coherent sheaf. They then identify its primitive component inside the Jacobian ring through the Griffiths residue description. The resulting formula supplies a computational test for candidate algebraic cycles. As a final application, special cycles obtained via a Shioda map settle the Hodge conjecture for the degree-33 Fermat fourfold.
abstract_ja: >-
  滑らかな射影超曲面 $X$ 上の連接層について、対応する加群の自由分解からChern指標を表す明示的なČech cocycleを構成し、Griffiths留数写像のもとでのJacobian環内の像を計算する。この式はLandau--Ginzburg模型のKapustin--Li公式の幾何学的類似物であり、Hodge理論を用いて直接証明される。任意の連接層のChern指標の原始部分を可換代数で計算する方法が得られ、その応用として次数33のFermat四次元多様体に対するHodge予想が証明される。
abstract_source_url: "https://arxiv.org/abs/2609.12759"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12759](https://arxiv.org/abs/2609.12759)
- **著者:** David Favero, Tyler L. Kelly
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

超曲面環上の有限生成加群の自由分解は、十分先で行列因子化による2周期分解になる。本論文はこの具体的な分解データから、対応する連接層のChern指標を直接計算する。

第一の主結果はACM層のChern指標をČech cocycleとして明示する公式である。一般の連接層も有限部分と最終syzygyへ分解できるため、この公式と直線束のChern指標を組み合わせて扱える。

さらにGriffiths留数定理を用い、偶数次元超曲面におけるChern指標の原始成分をJacobian環の明示的な多項式として表す。行列因子化に対するKapustin--Li公式と認識できる形を、幾何学的・Hodge理論的に導く点が新しい。

最後にこの計算法を代数的サイクルの探索へ用いる。次数33のFermat四次元多様体では、ある三次四次元多様体上の有理正規scrollの類をShioda写像で引き戻し、従来未解決だったHodge予想を証明する。

## 背景と問題設定

$S=k[x_0,\ldots,x_{n+1}]$、$R=S/(Q)$、$X=Z(Q)\subset\mathbb P^{n+1}$ を滑らかな超曲面とする。最大Cohen--Macaulay加群の分解は、$AB=BA=Q\operatorname{id}$ を満たす行列 $A,B$ により2周期的になる。一般の連接層 $\mathcal G$ も最終的にこの形のACM層へ帰着し、Chern指標は有限自由分解から加法的に復元される。

## 主結果

### Čech cocycleによるChern指標（Theorem 1.1 / Theorem 2.10）

Introductionで定義される $\operatorname{End}(\mathcal E_0)\otimes\Omega_X^1$ 値のČech cocycle $\Theta,\Xi$ に対し、ACM層 $\operatorname{coker}A$ の第 $k$ Chern指標は

$$
\operatorname{ch}_k(\operatorname{coker}A)=\frac1{k!}\operatorname{tr}\bigl((\Theta-\Xi)^k\bigr)
$$

で与えられる。局所代数的接続を構成してAtiyah類を明示計算することがこの公式の基礎となる。

### Jacobian環における原始成分（Theorem 1.3 / Theorem 3.6）

$X$ が滑らかな $2k$ 次元超曲面なら、$\operatorname{ch}_k(\mathcal G)$ の原始成分は行列 $A,B$ の偏微分を交互に掛けたtraceの差としてJacobian環に表示される。具体的には

$$
\operatorname{ch}^{\rm prim}_k(\mathcal G)=\frac{(-1)^kc_k}{m}\operatorname{tr}(\partial_0A\partial_1B\cdots\partial_{2k}A\partial_{2k+1}B-\partial_0B\partial_1A\cdots\partial_{2k}B\partial_{2k+1}A),
$$

ただし $c_k=(-1)^{k(k+1)/2}/k$ である。分解が有界ならこの原始成分は0となる。

### 次数33 Fermat四次元多様体（Theorem 1.8）

次数33のFermat四次元多様体に対してHodge予想が成り立つ。Introductionによれば、特定の三次四次元多様体の代数的格子を生成する有理正規scrollをShioda写像で引き戻し、必要な新しい代数的サイクルを得る。これらは射影空間内の完全交叉から得られる既知の型とは異なる。

## 証明の見取り図

Theorem 1.1では行列因子化から局所代数的接続を作り、Atiyah類のtraceとしてChern指標を計算する。Theorem 1.3ではこのČech表示とCarlson--GriffithsによるJacobian環のČech表示を、接続準同型の列を通して比較する。最後の応用では行列公式を候補サイクルの計算装置として用い、Shioda写像から得たサイクルが不足していたHodge類を与えることを確認する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12759](https://arxiv.org/abs/2609.12759)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.7, 1.8
- **論文構成の説明:** Introductionの各主結果の直後
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
