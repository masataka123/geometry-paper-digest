---
layout: paper
title: "Characteristic-free characterizations of projective space for smooth toric varieties"
title_ja: "滑らかなトーリック多様体に対する標数によらない射影空間の特徴づけ"
authors: "Osamu Fujino, Hiroshi Sato"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that a smooth projective toric variety over an algebraically closed field of arbitrary characteristic is isomorphic to a projective space if its tangent bundle contains an ample locally free subsheaf of positive rank. No torus-equivariant structure on this subsheaf is assumed. The proof uses primitive relations, the toric Euler sequence, and characteristic-free cohomological lifting. As an application of the same method, we establish the toric form of Beauville's cohomological characterization of projective spaces and quadrics, including the polarization. Without the toric hypothesis, both characterizations fail in characteristic two.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - positive-characteristic
  - toric-geometry
arxiv_id: "2609.03282v1"
arxiv_url: "https://arxiv.org/abs/2609.03282"
arxiv_submitted: "2026-09-03"
arxiv_updated: "2026-09-03"
summary: >-
  任意標数の代数閉体上の滑らかな射影トーリック多様体について、接束が正階数の豊富な局所自由部分層を含めば射影空間であることを示す。同じ方法により、外積接束のコホモロジー非消滅から射影空間または低次元quadricを偏極込みで特徴づける。
abstract_en: ""
summary_en: >-
  This work gives characteristic-independent criteria for a smooth projective toric variety to be projective space. An ample locally free subsheaf of positive rank inside the tangent sheaf is enough, without any equivariance assumption. A related cohomological condition classifies the possible polarized toric varieties, while characteristic-two quadrics explain why the toric hypothesis cannot simply be removed.
abstract_ja: >-
  任意標数の代数閉体上の滑らかな射影トーリック多様体で、接束が正階数の豊富な局所自由部分層を含むならば、多様体は射影空間と同型であることを証明する。この部分層にトーラス同変構造は仮定しない。原始関係、トーリックEuler列、標数によらないコホモロジー持ち上げを用い、応用として射影空間とquadricに対するBeauvilleのコホモロジー的特徴づけのトーリック版を偏極込みで得る。トーリック仮定を外すと標数2で両特徴づけに反例がある。
abstract_source_url: "https://arxiv.org/abs/2609.03282"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.03282](https://arxiv.org/abs/2609.03282)
- **著者:** Osamu Fujino, Hiroshi Sato
- **初回投稿日:** 2026年9月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接束の正値性から多様体を特徴づける問題は高次元代数幾何の基本問題である。複素数体上では、滑らかな射影多様体の接束が正階数の豊富な局所自由部分層を含めば射影空間になるというAndreatta--Wiśniewskiの定理が知られる。

本論文は滑らかな射影トーリック多様体に限定し、この結論を任意標数の代数閉体上で直接証明する。部分層のトーラス同変性も、商が局所自由であることも不要である。

さらにBeauville型のコホモロジー非消滅条件を満たす偏極トーリック多様体を分類する。射影空間のほかに現れるのは1次元と2次元の滑らかなquadricだけである。標数2の奇数次元quadricは非トーリック版への反例となるため、仮定の役割も明確である。

## 背景と問題設定

$X=X_\Sigma$ を $n$ 次元滑らかな射影トーリック多様体とする。トーリックMori理論では極端rayの原始曲線類 $\gamma_R$ と不変素因子 $D_\rho$ に対し

$$
D_\rho\cdot\gamma_R\le1
$$

が成り立つ。一方、階数 $r$ の豊富なベクトル束 $E$ では $L=\det E$ と置くと

$$
L\cdot\gamma_R\ge r
$$

となる。この二つの数値評価をEuler列のコホモロジーへ接続することが核心である。

## 主結果

### 豊富な接部分層による特徴づけ（Theorem 1.1）

任意標数の代数閉体 $k$ 上の $n$ 次元滑らかな射影トーリック多様体 $X$ を考える。正階数 $r$ の豊富なベクトル束 $E$ から局所自由層の単射

$$
E\hookrightarrow T_X
$$

が存在するならば、$X\simeq\mathbb P_k^n$ である。$E$ はトーラス同変でなくてよく、$T_X/E$ の局所自由性も仮定しない。

### Beauville型特徴づけ（Theorem 1.2）

$L$ を $X$ 上の豊富な線束とし、ある $1\le p\le n$ について

$$
H^0\!\left(X,\bigwedge^pT_X\otimes L^{-p}\right)\ne0
$$

とする。このとき偏極多様体 $(X,L)$ は次のいずれかであり、逆も成り立つ。

1. $(\mathbb P_k^n,\mathcal O_{\mathbb P^n}(1))$。
2. $p=n=1$ かつ $(\mathbb P_k^1,\mathcal O_{\mathbb P^1}(2))$。
3. $p=n=2$ かつ $(\mathbb P_k^1\times\mathbb P_k^1,\mathcal O(1,1))$。

後二者はそれぞれ偏極された滑らかな1次元および2次元quadricである。

## 証明の見取り図

原始関係から $D_\rho\cdot\gamma_R\le1$ を得て、$E$ の豊富性から得る $\det E\cdot\gamma_R\ge r$ と比較する。$r<n$ ではトーリックEuler列のdivided-power exterior resolutionとトーリックKodaira消滅を使い、行列式切断を中間項の外積へ持ち上げる。そこから豊富な不変素因子を作り、fanが $\mathbb P^n$ のfanであることを導く。$r=n$ では $-K_X\sim L+F$ を用い、極端rayの反標準次数からsimplex関係を得る。divided powerを用いるため標数に依存する係数が微分に現れない。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.03282](https://arxiv.org/abs/2609.03282)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
