---
layout: paper
title: Fourteenth-canonical birationality of threefolds with positive geometric genus
title_ja: 正の幾何種数をもつ三次元多様体の第十四標準写像
authors: Zhengjie Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that the pluricanonical map of a complex projective threefold of general type with canonical singularities and positive geometric genus is birational in every degree at least fourteen. The bound is sharp.
topic: algebraic-geometry
tags:
- birational-geometry
- hodge-theory
- singularities
arxiv_id: 2611.12717v1
arxiv_url: https://arxiv.org/abs/2611.12717
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 正の幾何種数をもつ複素射影一般型三次元多様体では、全ての十四以上の多重標準写像が双有理となることを示す。従来の十七という上界を予想された最良値まで改善し、正則二形式から作る極の障害で残余の場合を解決する。
abstract_en: ''
summary_en: This paper determines the optimal uniform pluricanonical birationality degree under a positive-geometric-genus assumption. The unresolved numerical regime is one in which the first three spaces of canonical sections are all one-dimensional. Holomorphic two-forms provide information that ordinary section counts miss. Their polar behavior ultimately supplies a section separating the remaining quadratic ambiguity in degree fourteen.
abstract_ja: canonical特異点を許す三次元一般型多様体について、幾何種数が正なら第十四標準写像が双有理となり、それ以降の全ての次数でも双有理性が成り立つ。重み付き超曲面の例により十三では不十分である。証明の新しい部分は低次数の多重種数が全て一である残余の場合で、正則二形式と標準環の構造を組み合わせて不足する切断を作る点にある。
abstract_source_url: https://arxiv.org/abs/2611.12717
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12717v1](https://arxiv.org/abs/2611.12717)
- **著者:** Zhengjie Yu
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重標準写像は、一般型多様体を標準切断から再構成するための基本的な写像である。十分高い次数なら双有理になることは一般論から分かるが、具体的で最良の次数を決めるには別の議論が必要となる。

本論文は、正の幾何種数をもつ一般型三次元多様体では十四以上の全ての次数で双有理性が成り立つことを示す。canonical特異点を許し、十四という値は重み付き超曲面の例により改善できない。

難しいのは幾何種数一で、第二・第三多重種数も一のままという状況である。著者はこの残余の場合に存在する正則二形式を用い、標準環の切断数だけでは見えない極と微分の制約を取り出す。これにより、従来十七まで知られていた一様上界を予想された十四まで下げる。

## 背景と問題設定

$P\_m(X)=h^0(X,\omega\_X^{[m]})$、$p\_g=P\_1$ とし、完全な $m$-標準系が定める有理写像を $\varphi\_m$ とする。$p\_g>0$ では非零標準切断を掛けることで、ある次数で双有理ならそれより高い次数でも双有理になる。

幾何種数が大きい場合や低次数に多くの切断がある場合には既知の強い評価がある。Introductionの整理では、未解決の中心は

$$
P\_1=P\_2=P\_3=1,\qquad q=0,\qquad\chi(\mathcal O\_X)>0
$$

の場合である。滑らかなモデル $W$ 上では $h^{2,0}(W)=\chi(\mathcal O\_W)>0$ となり、切断の乏しさとは対照的に正則二形式が得られる。

## 主結果

### 鋭い第十四標準双有理性（Theorem 1.1）

$X$ をcanonical特異点をもつ複素射影一般型三次元多様体とし、$p\_g(X)>0$ とする。このとき

$$
\varphi\_m:X\dashrightarrow\mathbb P(H^0(X,\omega\_X^{[m]})^\vee)
\quad\text{は全ての }m\ge14\text{ で像へ双有理}
$$

となる。これは幾何種数一の場合に提起されていたChen–Hu–Peneginiの予想を解決するという主張である。

一般の超曲面 $X\_{28}\subset\mathbb P(1,3,4,5,14)$ は $p\_g=1$ をもち、第十三標準写像は双有理でない。したがって、仮定を変えずに十四を十三へ下げることはできない。

## 証明の見取り図

非零切断 $a\in H^0(W,mK\_W)$ と正則二形式から、原点以外を零へ送らない自然な二次写像

$$
H^0(W,\Omega\_W^2)\longrightarrow
H^0(W,(2m+2)K\_W)/a^2H^0(W,2K\_W)
$$

を構成する。これが $P\_{2m+2}-P\_2\ge h^{2,0}(W)$ を与え、さらに留数から被約な標準成分を検出する。

標準形式 $s$ と二形式 $\alpha$ に対して $\iota\_v s=\alpha$ で定まる有理ベクトル場を考える。正規化切断空間 $E\_m=s^{-m}H^0(mK\_W)$ には $v(E\_m)\subset E\_{m+2}$ が成り立ち、混合Hodge理論が有限次元の不変部分空間上の作用を制約する。

標準系の制限により、双有理性が失敗し得る場合を第四標準鉛筆の $(K^2,p\_g)=(1,2)$ 曲面と、第六標準写像の二次的な状況へ絞る。標準種数二曲線上の標識されたWeierstrass点で極を管理し、最後は交代Jacobianが二次不変体の外に出ることから第十四標準切断を得る。これはIntroductionに述べられた証明経路の紹介であり、後続節の局所計算を新たに再構成したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12717)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12717v1) — Section 1, pp. 2–3
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12717v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
