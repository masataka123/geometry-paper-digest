---
layout: paper
title: Projective varieties with nef tangent bundle in positive characteristic
title_ja: 正標数でnef接束を持つ射影多様体の構造
authors: Akihiro Kanemitsu, Kiwamu Watanabe
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $X$ be a smooth projective variety defined over an algebraically closed field of positive characteristic $p$ whose tangent bundle is nef. We prove that $X$ admits a smooth morphism $X \to M$ such that the fibers are Fano varieties with nef tangent bundle and $T_M$ is numerically flat. We also prove that extremal contractions exist as smooth morphisms. As an application, we prove that, if the Frobenius morphism can be lifted modulo $p^2$, then $X$ admits, up to a finite \'etale Galois cover, a smooth morphism onto an ordinary abelian variety whose fibers are products of projective spaces.
topic: algebraic-geometry
tags:
- positive-characteristic
- positivity
- fano-varieties
- minimal-model-program
- vector-bundles-sheaves
arxiv_id: 2012.09419v1
arxiv_url: https://arxiv.org/abs/2012.09419v1
arxiv_submitted: '2020-12-17'
arxiv_updated: '2020-12-17'
summary: 正標数で接束がnefな滑らかな射影多様体を、Fanoファイバーと数値的に平坦な接束を持つ底へ分解する。極端半直線の収縮の存在と滑らかさを証明し、Frobeniusがmod p²で持ち上がる場合にはordinaryアーベル多様体上の射影空間の積による族を得る。
abstract_en: ''
summary_en: Kanemitsu and Watanabe extend the positive-versus-flat decomposition of nef tangent geometry to positive characteristic. Their argument first resolves separability issues for rationally chain connected varieties, allowing smooth extremal contractions to be constructed. The resulting quotient has numerically flat tangent bundle and Fano fibres. An additional Frobenius lifting assumption gives a more explicit description after a finite étale cover.
abstract_ja: 代数閉体上の正標数の滑らかな射影多様体で接束がnefなら、滑らかな射により、nef接束を持つFanoファイバーと数値的に平坦な接束を持つ底へ分解できる。K負の極端半直線の収縮が存在して滑らかになることも示す。Frobeniusをmod p²で持ち上げられる場合には、有限étale Galois被覆後、ordinaryアーベル多様体への滑らかな射を持ち、そのファイバーは射影空間の積になる。
abstract_source_url: https://arxiv.org/abs/2012.09419v1
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2012.09419v1](https://arxiv.org/abs/2012.09419v1)
- **著者:** Akihiro Kanemitsu, Kiwamu Watanabe
- **初回投稿日:** 2020-12-17
- **最終更新日:** 2020-12-17
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接束のnef性は、多様体の幾何を「正値な部分」と「平坦な部分」に分けることを示唆する。複素数体上ではDemailly–Peternell–Schneiderの構造定理がこの描像を与えるが、正標数では有理曲線の非分離性や一般的滑らかさの欠如が障害となる。

本論文は、接束がnefなら有理鎖連結性から分離的有理連結性が従うことを出発点に、極端収縮の存在と滑らかさを証明する。最大有理鎖連結商を使うことで、Fanoファイバーと数値的に平坦な接束を持つ底という分解を得る。

底が常にアーベル多様体のétale商か、Fano部分が常に等質空間か、という一般の分類問題は残る。一方、Frobeniusの持ち上げという追加条件の下では、有限被覆後のAlbanese射のファイバーを射影空間の積として明示できる。

## 背景と問題設定

以下、$k$は標数$p>0$の代数閉体、$X/k$は滑らかな射影多様体で、$T\_X$はnefとする。有理鎖連結性をRCC、分離的有理連結性をSRCと略す。標数0では両者の関係がよく理解されるが、正標数で一般に同一視はできない。

数値的に平坦な束とは、束と双対束の双方がnefであるものをいう。本論文で得る底の接束の平坦性はこの意味であり、底を無条件にアーベル多様体と同定する結論ではない。

## 主結果

### 主定理1：有理連結性の分離性（Theorem 1.3、Corollary 1.4）

$T\_X$がnefなら

$$
X\text{ がRCC}\quad\Longrightarrow\quad X\text{ がSRC}
$$

となる。さらにこの場合、$X$は代数的に単連結で、$H^1(X,\mathcal O\_X)=0$であり、$X$上の数値的に平坦なベクトル束はすべて自明になる。これが正標数特有の病理を抑える基礎である。

### 主定理2：極端収縮（Theorem 1.5）

任意の$K\_X$負の極端半直線$R\subset\overline{\operatorname{NE}}(X)$に対し、その収縮$f:X\to Y$が存在して滑らかである。各ファイバー$F$はSRCなFano多様体で$T\_F$がnef、また$T\_Y$もnefとなる。正標数で一般に未解決な収縮の存在を、接束のnef性の下で確保する。

### 主定理3：RCCの場合の正値性（Theorem 1.6）

$X$がRCCなら$X$はFanoであり、Kleiman–Mori錐$\overline{\operatorname{NE}}(X)$は単体的になる。単に有理曲線が十分存在するという結論から、反標準因子の豊富性へ進む結果である。

### 主定理4：分解（Theorem 1.7）

滑らかな収縮

$$
\varphi:X\longrightarrow M
$$

が存在し、これは最大有理鎖連結ファイブレーションである。各ファイバーはnef接束を持つ滑らかなSRC Fano多様体であり、$T\_M$は数値的に平坦である。一般のFano部分を等質空間とすることや、平坦な底をアーベル多様体のétale商とすることはQuestion 1.8として区別される。

### 主定理5：Frobenius持ち上げへの応用（Theorem 1.10）

さらに$X$がFrobenius射とともにmod $p^2$で持ち上がるF-liftable多様体なら、有限étale Galois被覆$Y\to X$が存在し、

$$
\alpha\_Y:Y\longrightarrow\operatorname{Alb}(Y)
$$

はordinaryアーベル多様体への滑らかな射で、そのファイバーは射影空間の積となる。これはnef接束の仮定を保った上での結果である。

## 証明の見取り図

Introductionは、Shenによる分離的有理連結性と葉層の関係を用い、RCCな$X$からSRCでnef接束を持つ純非分離有限像を構成すると説明する。非自明な場合には固定点のない$\mu\_p$または$\alpha\_p$作用を導き、SRC多様体の単連結性の議論と矛盾させる。

このSRC性を使って極端収縮の滑らかさを正標数へ移し、相対Kleiman–Mori錐を調べてRCCファイバーのFano性を得る。それらを組み合わせて分解定理へ進み、最後にF-liftableの場合へ適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2012.09419v1)
- **Introduction:** [PDF](https://arxiv.org/pdf/2012.09419v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.5–1.7, 1.10; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2012.09419v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
