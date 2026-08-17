---
layout: paper
title: "Equivalences via twisted hyperholomorphic sheaves from transverse Lagrangian fibrations"
title_ja: "横断的 Lagrange ファイブレーションから作る捩れ超正則層と同値"
authors: "Moritz Hartlieb, Saket Shah"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Following ideas of Kapustka-Kapustka, we use Lagrangian fibrations to construct twisted
  hyperholomorphic sheaves on products of hyperkähler manifolds of K3$^{[n]}$- and OG10-type. As
  applications, we prove the Lefschetz standard conjecture and the D-equivalence conjecture for
  hyperkähler manifolds of OG10-type.
topic: algebraic-geometry
tags:
  - birational-geometry
  - vector-bundles-sheaves
arxiv_id: "2608.13403v1"
arxiv_url: "https://arxiv.org/abs/2608.13403"
arxiv_submitted: "2026-08-13"
arxiv_updated: "2026-08-13"
summary: >-
  二つの横断的 Lagrange ファイブレーションをもつ $K3^{[n]}$ 型または OG10 型の射影超 Kähler 多様体から、積上の捩れ超正則ベクトル束を構成する。これを用いて OG10 型超 Kähler 多様体に対する Lefschetz 標準予想と、双有理なものの導来圏が同値になるという D-同値予想を証明する。
abstract_en: ""
summary_en: >-
  The authors construct twisted hyperholomorphic bundles by combining two transverse Lagrangian fibrations on a projective hyperkähler manifold. The construction applies both to manifolds of Hilbert-scheme type and to the ten-dimensional O'Grady deformation type. Tate--Shafarevich twists and twisted Fourier--Mukai kernels provide the bundle on a product of associated hyperkähler manifolds. Its deformation and cohomological properties yield the Lefschetz standard conjecture and the birational derived-equivalence conjecture for hyperkähler varieties of OG10 type.
abstract_ja: >-
  Kapustka--Kapustka の着想に沿い、Lagrange ファイブレーションを用いて $K3^{[n]}$ 型および OG10 型の超 Kähler 多様体の積上に捩れ超正則層を構成する。この構成は横断的な二つのファイブレーションと、それぞれに付随する Tate--Shafarevich twist を結ぶ Fourier--Mukai 核に基づく。応用として OG10 型超 Kähler 多様体について Lefschetz 標準予想と D-同値予想を証明する。
abstract_source_url: "https://arxiv.org/abs/2608.13403"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.13403](https://arxiv.org/abs/2608.13403)
- **著者:** Moritz Hartlieb, Saket Shah
- **初回投稿日・最終更新日:** 2026年8月13日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影超 Kähler 多様体では第二コホモロジーの Hodge 理論や双有理幾何がよく理解されている一方、代数的サイクルや導来圏に関する一般予想はなお難しい。$K3^{[n]}$ 型では Markman の超正則層が、Lefschetz 標準予想や導来同値を扱う強力な道具になってきた。

本論文は、二つの横断的 Lagrange ファイブレーションを出発点に、別の超正則層の構成を与える。重要なのは $K3^{[n]}$ 型だけでなく、O'Grady の10次元変形型（OG10 型）にも構成が及ぶことである。

二つのファイブレーションから、元の多様体をそれぞれ Tate--Shafarevich twist として表すコンパクト化アーベル・スキーム $X,Z$ を得る。両側の捩れ Fourier--Mukai 核を合成した対象 $\mathcal Q$ が、$X\times Z$ 上の捩れ超正則ベクトル束になることが中心的な構成定理である。

この束を変形させ、そのコホモロジー作用と導来圏への作用を利用することで、OG10 型に対する二つの大きな応用を得る。すなわち双 Lefschetz 作用素が代数的サイクルで実現されること、および双有理な OG10 型超 Kähler 多様体の有界導来圏が同値になることである。

## 背景と問題設定

Lefschetz 標準予想は、滑らかな射影多様体 $X$ と豊富因子 $L$ に付随する $\mathfrak{sl}_2$ 三つ組 $(L\cup -,h,\Lambda)$ の双作用素 $\Lambda$ が $X\times X$ 上の代数的サイクルから誘導されると主張する。D-同値予想は、滑らかな射影 Calabi--Yau 多様体 $X,X'$ が双有理なら

$$
D^b(X)\simeq D^b(X')
$$

となると主張する。$K3^{[n]}$ 型では既知だったが、OG10 型全体への拡張が本論文の課題である。

「横断的」とは、二つの Lagrange ファイブレーション $\pi_1,\pi_2:Y\to\mathbb P^n$ の任意の二つのファイバーが有限個の点で交わることをいう。この条件が、二方向の相対 Fourier--Mukai 変換を一つの核へ合成する幾何的土台になる。

## 主結果

### 捩れ超正則束の構成（Theorem 1.3 / Theorem 5.8）

$Y$ を $K3^{[n]}$ 型または OG10 型の射影超 Kähler 多様体とし、Introduction で述べられた横断的ファイブレーションの構成から $X,Z$ と Brauer 類 $\alpha_X\in\operatorname{Br}(X)$、$\alpha_Z\in\operatorname{Br}(Z)$ を得る。二つの捩れ核の合成である

$$
\mathcal Q\in D^b(X\times Z,\alpha_X\boxtimes\alpha_Z)
$$

は、$X\times Z$ 上の捩れ超正則ベクトル束である。Kapustka--Kapustka が特別な double EPW sextic 四次元多様体で得た構成を、二つの変形型へ一般化する結果である。

### OG10 型の Lefschetz 標準予想（Theorem 1.4 / Theorem 6.1）

OG10 型のすべての超 Kähler 多様体について Lefschetz 標準予想が成立する。すなわち双 Lefschetz 作用素 $\Lambda$ は自己積上の代数的サイクルによって誘導される。従来の結果がモジュライの低次元部分に限られていたのに対し、OG10 型全体を扱う。

### OG10 型の D-同値予想（Theorem 1.5 / Theorem 6.9）

OG10 型の双有理な射影超 Kähler 多様体 $X,X'$ に対し、

$$
D^b(X)\simeq D^b(X')
$$

が成立する。これは $K3^{[n]}$ 型で知られていた結果の OG10 型版である。

## 証明の見取り図

まず各 Lagrange ファイブレーションを、全ファイバーが整なコンパクト化アーベル・スキームの Tate--Shafarevich twist として表す。$K3^{[n]}$ 型では Markman の結果、OG10 型では cubic fourfold に付随する LSV ファイブレーションの特徴づけを使う。

次に Arinkin、Bottini、および LSV ファイブレーションに関する Yu の結果から、$X\times Y$ と $Y\times Z$ 上の捩れ Poincaré 型核を得る。その Fourier--Mukai 関手を合成した核 $\mathcal Q$ に Bottini の技術的結果を適用し、局所自由性と超正則性を確立する。最後にこの束の変形を代数的対応および導来同値へ移し、二つの予想へ結び付ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.13403](https://arxiv.org/abs/2608.13403)
- **Introduction:** Section 1, pp. 1--6
- **Introduction中で言及された主要定理番号:** Theorems 1.3 (5.8), 1.4 (6.1), 1.5 (6.9); Question 1.6
- **論文構成の説明:** Section 1.1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
