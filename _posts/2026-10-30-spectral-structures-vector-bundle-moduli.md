---
layout: paper
title: Spectral Structures on Vector Bundles
title_ja: ベクトル束のスペクトル構造と解析的モジュライ
authors: Nikita Nikolaev
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We develop an intrinsic theory of spectral structures on holomorphic vector bundles over compact Riemann surfaces, generalising eigenspace decompositions without eigenvalues. Their geometric realisations are presentations of vector bundles as pushforwards of line bundles along finite branched covers. We construct their analytic moduli stack locally of finite presentation and identify it with the relative Picard stack of the universal family of finite covers. We prove that the forgetful morphism to the stack of vector bundles is representable by analytic spaces and is smooth and surjective on a distinguished smooth open substack. Consequently, every holomorphic family of vector bundles locally admits spectral presentations along smooth connected simply branched covers, and these presentations can be deformed alongside the underlying bundles. The relative Picard description yields explicit local dimension formulas and recovers the stack of regular Higgs bundles as base change
  along the Hitchin base. We also characterise the additional data supplied to a spectral structure by a regular Higgs field as a global twisted generator, and give examples of smooth connected spectral structures which cannot arise from any Higgs field.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- moduli
- higgs-nonabelian-hodge
arxiv_id: 2610.38972v1
arxiv_url: https://arxiv.org/abs/2610.38972
arxiv_submitted: '2026-10-28'
arxiv_updated: '2026-10-28'
summary: 固有値を指定せず固有空間の分解に相当する情報だけを残すスペクトル構造を、曲線上の正則ベクトル束に対して研究する。有限分岐被覆上の線束の押し出しとしての表示を解析的モジュライに組織化し、Higgs場から来る構造とそれより広い構造の違いを明らかにする。
abstract_en: We develop an intrinsic theory of spectral structures on holomorphic vector bundles over compact Riemann surfaces, generalising eigenspace decompositions without eigenvalues. Their geometric realisations are presentations of vector bundles as pushforwards of line bundles along finite branched covers. We construct their analytic moduli stack locally of finite presentation and identify it with the relative Picard stack of the universal family of finite covers. We prove that the forgetful morphism to the stack of vector bundles is representable by analytic spaces and is smooth and surjective on a distinguished smooth open substack. Consequently, every holomorphic family of vector bundles locally admits spectral presentations along smooth connected simply branched covers, and these presentations can be deformed alongside the underlying bundles. The relative Picard description yields explicit local dimension formulas and recovers the stack of regular Higgs bundles as base change
  along the Hitchin base. We also characterise the additional data supplied to a spectral structure by a regular Higgs field as a global twisted generator, and give examples of smooth connected spectral structures which cannot arise from any Higgs field.
summary_en: ''
abstract_ja: コンパクトRiemann面上の正則ベクトル束について、固有値を持たない固有空間分解を一般化する内在的なスペクトル構造を構成する。その幾何学的実現は有限分岐被覆上の線束の押し出しである。スペクトル構造の解析的モジュライスタックを構成し、普遍有限被覆の相対Picardスタックと同一視する。適切な滑らかな開部分では束を忘れる射が滑らかかつ全射となり、正則族に対する局所的なスペクトル表示と変形が得られる。regular Higgs束との関係を記述するとともに、どのtwistのHiggs場からも生じない滑らかで連結な例を与える。
abstract_source_url: https://arxiv.org/abs/2610.38972
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.38972v1](https://arxiv.org/abs/2610.38972)
- **著者:** Nikita Nikolaev
- **初回投稿日:** 2026-10-28
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

相異なる固有値を持つ線形写像は、ベクトル空間を一次元固有空間へ分解する。しかし固有値を別の値に取り替えても、固有空間の分解は変わらない。本論文のスペクトル構造は、この分解に対応する可換代数とその作用を、写像そのものから切り離して扱う。

曲線上のベクトル束では、局所的な一次元部分の入れ替わりや分岐が起こる。そこで有限平坦被覆$\pi:Y\to X$上の線束$L$の押し出し$E\simeq\pi\_\ast L$という表示が、固有空間分解の代わりとなる。論文はこの表示を、非被約なパラメータ空間も許した正則族とモジュライの言葉で扱う。

Higgs束のスペクトル対応は重要な出発点だが、スペクトル構造のすべてがHiggs場から得られるわけではない。著者は、この追加データの違いを説明し、束の変形と両立する表示が存在すること、ならびにモジュライの良い開部分と全体の特異性を区別する。

## 背景と問題設定

階数$n$の正則束$E$のスペクトル構造は、同じ階数の局所自由な可換代数$\mathcal A$と作用$\rho:\mathcal A\to\operatorname{End}(E)$で、$E$が$\mathcal A$上の階数1局所自由加群になるものである。相対解析スペクトルにより

$$
Y=\operatorname{Spec}\_X(\mathcal A),\qquad E\simeq\pi\_\ast L
$$

と実現される。大域的な直和分解は、被覆$Y$が$X$の非交和である特殊な場合に相当する。

作用は単射となり、off-diagonal束$Q$を

$$
0\longrightarrow\mathcal A\longrightarrow\operatorname{End}(E)\longrightarrow Q\longrightarrow0
$$

で定義する。被覆が滑らか・連結・単純分岐で、$H^1(X,Q)=0$となる構造をcleanと呼ぶ。消滅条件は束の一次変形をスペクトル表示の変形で捉えるために用いられる。

## 主結果

### 解析的モジュライと局所表示（Theorems 6.1–6.2、5.1）

Introductionでは次のように述べられている。スペクトル構造は局所有限表示の解析的スタックをなし、ベクトル束のスタックへの忘却射$F$は解析空間で表現可能である。cleanなスペクトル構造の開部分に制限すると$F$は滑らかかつ全射になる。

その結果、正則ベクトル束の任意の正則族に対し、パラメータ空間上で局所的に、滑らか・連結・単純分岐の被覆上の線束からの表示を選べる。非被約なパラメータ空間や、底曲線自体が変動する族も枠組みに含まれる。全モジュライが滑らかであるという主張ではない。

### 相対PicardスタックとHiggs束（Theorems 6.3–6.4）

有限被覆のスタック上で見ると、スペクトル構造のスタックは普遍被覆の相対Picardスタックに同値となる。regularなtwisted Higgs束のスタックは、この構造をHitchin底に沿ってbase changeしたものとして回収される。

regular Higgs場が追加する情報は、スペクトル代数の大域的なtwisted生成元である。しかしそのような生成元は、どのtwistを許しても存在しない場合がある。IntroductionのExample 4.3は、$\mathbb P^1$上の自明な階数3の束にもそのようなclean構造があると述べる。

### 局所次元（Theorem 6.5、Corollaries 6.5–6.6）

固定した曲線$X$上の滑らかで連結なスペクトル表示$(\pi:Y\to X,L)$で、総分岐次数を$r$とすると、

$$
\dim\_{(\pi,L)}\operatorname{SpStr}\_n(X)=r+g\_Y-1=\frac32r+n(g\_X-1)
$$

である。clean部分での$F$の相対次元は$r+h^0(X,Q)$となる。これは束$E$自体を固定したスペクトル構造の解析空間の局所次元でもある。

## 証明の見取り図

有限被覆の層と有限代数上の加群との対応を、非被約パラメータ空間を含む相対状況へ拡張する。相対的な切断空間の表現可能性が、束およびスペクトル構造の解析的スタックの構成を支える。

clean条件の下ではoff-diagonal束のコホモロジー消滅を用いて、束の変形に合わせたスペクトル表示を扱う。他方、被覆を固定すると残るデータは線束なので、相対Picardスタックによる記述が得られる。Introductionは、変形が障害を持つ例、特異なスペクトル曲線が滑らかなモジュライ点を与える例、良い開部分が稠密でない例も挙げ、局所的な滑らかさを全体へ一般化できないことを示す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.38972)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.38972v1) — Section 0, pp. 2–6（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorems 5.1, 6.1–6.5; Proposition 4.3; Corollaries 6.5–6.6をIntroductionが要約
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.38972v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
