---
layout: paper
title: Canonical Projectivization of Algebraic Varieties
title_ja: 標準的射影モデルとMoishezon多様体の自己同型の持ち上げ
authors: Parsa Bakhtary
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We construct canonical projective birational models of normal proper integral algebraic spaces over arbitrary fields. The construction preserves the intrinsic quasi-projective core and is natural under semilinear isomorphisms. For smooth proper integral input in characteristic zero, we combine an intrinsic choice of ideals with Włodarczyk's principalization to obtain a canonical tower of blowups in smooth centers ending in a smooth projective variety. Consequently, every compact connected Moishezon manifold admits a smooth projective bimeromorphic model to which all automorphisms lift compatibly. The main ingredient is a family-sum argument yielding an intrinsic finite selection of maximal tuples of boundary ideal germs; successive modifications strictly decrease the boundary-image dimension. We also construct canonical quasi-projective models for nonproper normal input and a greatest schematizing ideal for separated finite-type algebraic spaces over noetherian bases. Oda's
  threefold illustrates the construction.
topic: algebraic-geometry
tags:
- birational-geometry
- complex-analytic-spaces
arxiv_id: 2611.04314v2
arxiv_url: https://arxiv.org/abs/2611.04314
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-07'
summary: 任意の体上の正規代数空間に、同型に関して自然な準射影双有理モデルを構成し、固有な場合は射影モデルを得る。標数0の滑らかな場合には滑らかな中心の爆発列を用い、Moishezon多様体の全自己同型が持ち上がる滑らかな射影モデルを与える。
abstract_en: We construct canonical projective birational models of normal proper integral algebraic spaces over arbitrary fields. The construction preserves the intrinsic quasi-projective core and is natural under semilinear isomorphisms. For smooth proper integral input in characteristic zero, we combine an intrinsic choice of ideals with Włodarczyk's principalization to obtain a canonical tower of blowups in smooth centers ending in a smooth projective variety. Consequently, every compact connected Moishezon manifold admits a smooth projective bimeromorphic model to which all automorphisms lift compatibly. The main ingredient is a family-sum argument yielding an intrinsic finite selection of maximal tuples of boundary ideal germs; successive modifications strictly decrease the boundary-image dimension. We also construct canonical quasi-projective models for nonproper normal input and a greatest schematizing ideal for separated finite-type algebraic spaces over noetherian bases. Oda's
  threefold illustrates the construction.
summary_en: ''
abstract_ja: 正規・整・分離的な有限型代数空間の内在的な準射影核を保ちながら、標準的な正規化爆発の有限列を構成する。固有な入力では射影モデルになり、標数0の滑らかな固有空間では固定した主イデアル化手続きにより滑らかな射影モデルを得る。自然性は半線形同型についてであり、任意の体拡大や滑らかな射への整合性は主張しない。
abstract_source_url: https://arxiv.org/abs/2611.04314
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.04314v2](https://arxiv.org/abs/2611.04314)
- **著者:** Parsa Bakhtary
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Chowの補題は固有な空間に射影的な双有理モデルを与えるが、通常の構成には開集合やイデアルの選択が入る。全自己同型を同じモデルへ持ち上げたいとき、これらの選択を内在的に行えるかが問題になる。

本論文は、準射影開集合の共通部分を保ちながら、境界のイデアルを標準的に選ぶ方法を与える。正規化爆発を反復すると準射影モデルになり、元が固有なら射影モデルになる。標数0の滑らかな場合には、滑らかな中心の爆発列へ置き換える。

その帰結として、コンパクトMoishezon多様体の全自己同型が整合的に持ち上がる滑らかな射影モデルを得る。ただし自然性は同型に関するものであり、任意の基底変換や自己同型の族との整合性まで主張するわけではない。

## 背景と問題設定

$X$を体$k$上の正規・整・分離的な有限型代数空間とし、極大な$k$-準射影開集合の集合を$\mathcal Q(X)$と書く。その準射影核は

$$
U(X)=\bigcap\_{W\in\mathcal Q(X)}W
$$

である。極大開集合の有限性により、これは空でない準射影開集合となる。構成はこの元の開集合を各段階で保つ。

半線形同型は基礎体の同型と、それに沿うスカラー移送後の空間の同型からなる。「標準的」はこの同型に対する自然性を意味する。存在条件と内在的最小値を使う非有効な構成で、計算アルゴリズムを与えるものではない。

## 主結果

### 主定理1：正規モデル（Theorem 1.1）

任意の体$k$と上記の$X$に対し、標準的な正規化爆発の有限順序付き列

$$
P(X)=X\_r\longrightarrow X\_{r-1}\longrightarrow\cdots\longrightarrow X\_0=X
$$

が存在する。$P(X)$は正規準射影多様体であり、$X$が固有なら射影的である。射$P(X)\to X$は射影的かつ双有理で、各段階は元の$U(X)$の逆像上で同型となる。

$X$が準射影なら列は空である。非自明な段階数はスキーム入力で高々$\dim X$、代数空間入力で高々$\dim X+1$であり、半線形同型は全列の一意で整合的な同型を誘導する。体の完全性や幾何的正規性・幾何的整性を追加で仮定しない。

### 主定理2：滑らかなモデル（Theorem 1.2）

標数0で$X$が滑らか・固有・整なら、主イデアル化の手続きと因子の規約を固定した上で、滑らかな閉部分空間を中心とする爆発列を構成でき、終点$P\_{\mathrm{sm}}(X)$は滑らかな射影多様体となる。中心は$U(X)$の逆像を避け、射影的な入力では列は空である。

正規の場合の「高々次元回」という上限は正規化爆発の段階数についてである。滑らかな場合の1回の主イデアル化は複数の爆発を含み得るため、同じ上限を個々の滑らかな爆発の回数へ移さない。

### 自己同型への帰結（Corollary 1.3、Corollary 7.2の概説）

持ち上げは抽象群の単射

$$
\operatorname{Aut}\_k(X)\hookrightarrow\operatorname{Aut}\_k(P(X))
$$

を与え、滑らかな標数0の場合は$P\_{\mathrm{sm}}(X)$を用いられる。複素解析側では、コンパクト連結Moishezon多様体に全自己同型が持ち上がる滑らかな射影双有理モデルを得る。Introductionは一般のFujiki class $\mathcal C$に対する問題は扱わないと明示する。

### 主定理3：標準的スキーム化（Theorem 1.4）

$S$をnoetherianスキーム、$X\to S$を分離的有限型の代数空間とする。最大スキーム開集合$X\_{\mathrm{sch}}$上で単位イデアルとなり、通常の爆発をスキームにするcoherent idealの中に、包含関係で最大のもの$\mathcal H\_X$が存在する。その爆発は$X$上射影的で、$X\_{\mathrm{sch}}$を変えず、同型に関して自然である。

これは非被約な代数空間も許す独立の構成である。「最大」はイデアルの包含についてであり、最小の双有理モデルが存在するという主張ではない。

## 証明の見取り図

既に作った修正$Y\to X$に対して、準射影開集合の境界像の次元を小さくする。境界の一般点に沿うイデアルの組から、適切な準射影近傍を作れるものを選び、包含極大性と厚さ・Hilbert多項式の係数の境界で候補を絞る。

有界性だけでは有限性は出ないため、既約な族のイデアルの和も同じ性質を持つというfamily-sumの議論を使う。極大性と合わせて候補が有限になる。その積を可逆化する修正は各候補のモデルへ写り、境界像の次元が厳密に下がる。これが停止と同型自然性の核で、滑らかな場合には同じ選択を主イデアル化と組み合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.04314)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.04314v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2, 1.4; Corollary 1.3; IntroductionによるCorollary 7.2の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.04314v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
