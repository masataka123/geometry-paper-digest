---
layout: paper
title: Transversal unfoldings of derived foliations
title_ja: 導来葉層の横断的展開と表示依存性
authors: Maurício Corrêa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study when a derived foliation along the fibres of a smooth morphism extends transversally to the total space. We classify strict unfoldings by basic Lie derivations, retaining the automorphisms arising from central isotropy. We define an intrinsic space of unfoldings and prove its agreement with the strict classification when the relative cotangent complex is a vector bundle in degree zero. A counterexample shows that the strict construction is not invariant under equivalent presentations. For two-term cotangent complexes, we describe cotangent extensions and their integrability conditions, and obtain cohomological existence criteria for strict unfoldings in explicit families. On smooth representable leaf spaces, descended unfoldings correspond to integrable Ehresmann connections.
topic: algebraic-geometry
tags:
- foliations
- moduli
- vector-bundles-sheaves
arxiv_id: 2606.04253v3
arxiv_url: https://arxiv.org/abs/2606.04253
arxiv_submitted: '2026-06-02'
arxiv_updated: '2026-11-09'
summary: 滑らかな族の各ファイバー上の導来葉層を、底空間方向まで延ばす横断的展開を分類する。Lie導分による厳密な模型と表示に依存しない内在的空間を区別し、通常の余接束の場合には一致する一方、高次の情報を落とすと分類が変わることを示す。
abstract_en: We study when a derived foliation along the fibres of a smooth morphism extends transversally to the total space. We classify strict unfoldings by basic Lie derivations, retaining the automorphisms arising from central isotropy. We define an intrinsic space of unfoldings and prove its agreement with the strict classification when the relative cotangent complex is a vector bundle in degree zero. A counterexample shows that the strict construction is not invariant under equivalent presentations. For two-term cotangent complexes, we describe cotangent extensions and their integrability conditions, and obtain cohomological existence criteria for strict unfoldings in explicit families. On smooth representable leaf spaces, descended unfoldings correspond to integrable Ehresmann connections.
summary_en: ''
abstract_ja: 導来葉層の横断的展開を、底空間のベクトル場を葉層の無限小対称性へ持ち上げる問題として定式化する。中心的等方性があると単なる導分の商では自己同型を失うため、交差加群による分類を導入する。さらにgraded mixed de Rham代数から内在的な展開空間を定め、余接複体が次数0のベクトル束なら厳密な分類と一致することを証明する。二項複体では平坦接続だけでなく閉じた1形式のデータも必要になる。
abstract_source_url: https://arxiv.org/abs/2606.04253
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.04253v3](https://arxiv.org/abs/2606.04253)
- **著者:** Maurício Corrêa
- **初回投稿日:** 2026-06-02
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな写像 $X\to S$ のファイバーごとに葉層が与えられているとき、パラメータに応じて葉層を変えることと、底空間方向も含めて全空間に葉層を延ばすことは異なる。本論文の対象は後者の横断的展開である。

導来葉層では、Lie algebroidによる具体的な表示だけを使うと、高次ホモトピーや中心的等方性による自己同型を失うことがある。著者は厳密な表示を固定した分類と、表示に依存しない内在的な展開空間を分離し、それらの比較条件を明確にする。

相対余接複体が次数0のベクトル束である通常の場合には二つの分類は一致し、エタール降下も可能になる。しかし一般の二項複体では接続だけでは足りず、追加の閉じた1形式が必要になる。単純な平坦接続の分類をそのまま導来の場合へ移すことの限界を具体的に示す結果である。

## 背景と問題設定

標数0で、$\pi:X\to S$ を滑らかな写像、$\mathcal F/S$ を相対導来葉層とする。横断的展開 $\widetilde{\mathcal F}$ の余接複体は
$$
\pi^\ast \Omega^1\_{S/k}\longrightarrow L\_{\widetilde{\mathcal F}}
\longrightarrow L\_{\mathcal F/S}\longrightarrow\pi^\ast \Omega^1\_{S/k}[1]
$$
という三角形に入る。古典的にも $\omega+\varepsilon\eta$ という変形に対し、展開には $h\thinspace d\varepsilon$ という横断方向の項とその可積分性が必要になる。

アフィン表示 $B\to A$ と相対dg-Lie algebroid $\mathfrak g\to T\_{A/B}$ を固定する。底空間へ射影する記号を持つ基本的な1階Lie導分の代数を $D^1\_{\mathrm{bas}}(\mathfrak g/B)$、内的導分の写像を $\iota$ とする。

## 主結果

### 有効な厳密模型の分類（Theorem A）

$B\to A$ が滑らかな $k$-代数間の滑らかな写像で、$\iota$ が単射であると仮定する。このとき厳密な展開の群oidに非自明な安定化群はなく、同型類は
$$
|\operatorname{Unf}^{\mathrm{tr,eff}}(\mathfrak g/B)|
\simeq\operatorname{Flat}\bigl(T\_{B/k},u^{\mathrm{der}}(\mathfrak g/B)\bigr),
\qquad u^{\mathrm{der}}=D^1\_{\mathrm{bas}}/\iota(\mathfrak g)
$$
と分類される。右辺は底空間の接束に対する平坦な分裂を表す。

### 中心的等方性を保持する分類（Theorem B）

$\iota$ の単射性を外すと、単なる商は展開の自己同型を見失う。代わりに交差加群
$$
\mathbb U^{\mathrm{der}}(\mathfrak g/B)
=[\mathfrak g\xrightarrow{\iota}D^1\_{\mathrm{bas}}(\mathfrak g/B)]
$$
を用いると
$$
\operatorname{Unf}^{\mathrm{tr}}\_{\mathrm{str}}(\mathfrak g/B)
\simeq\operatorname{Flat}\_{\mathrm{str}}(T\_{B/k},\mathbb U^{\mathrm{der}}(\mathfrak g/B))
$$
という群oidの同値が得られる。右辺は基本拡大と、その導分成分が随伴作用になる写像を保持する。

### 内在的空間との比較（Theorem C）

graded mixed de Rham代数の相対制限
$$
r\_\pi C=C\otimes^{\mathbb L}\_{\operatorname{DR}(B/k)}B
$$
のホモトピーファイバーとして展開空間 $\mathcal U\_\pi(\mathcal F)$ を定義すると、これは相対代数の同値に不変である。厳密に完全なChevalley–Eilenberg表示からは
$$
N\operatorname{Unf}^{\mathrm{tr}}\_{\mathrm{str}}(\mathfrak g/B)
\longrightarrow\mathcal U\_\pi(\mathcal F)
$$
という比較写像がある。$L\_{\mathcal F/S}$ が次数0のベクトル束なら、その双対から再構成した通常のLie algebroidについて比較は同値となる。一般の表示で無条件に同値とはならず、Introductionは同値な表示から異なるコホモロジーの厳密交差加群が生じる反例を挙げる。

### エタール降下（Theorem D）

$X,S$ が滑らかなスキームで、相対余接複体が次数0のベクトル束である場合、局所の導来切断から1切断されたエタール超層 $\mathcal S\_{\mathcal F,V}$ を作れる。アフィン $V\subset S$ 上で
$$
\mathcal U\_{\pi\_V}(\mathcal F|\_{X\_V})
\simeq N\operatorname{Unf}^{\mathrm{tr}}\_{\mathrm{str}}(\mathfrak g|\_{X\_V}/V)
\simeq\mathbb R\Gamma(X\_V,\mathcal S\_{\mathcal F,V})
$$
となり、比較は $V$ の制限と両立して底空間上で貼り合わさる。

### 二項模型に必要な追加データ（Theorem E）

$P$ をファイバー方向の可積分接続を持つベクトル束とする。$T\_{X/S}\ltimes P[-1]$ の厳密な横断的展開は、相対接続を延長する絶対的な可積分接続と、相対接方向を消す共変閉な $P$-値1形式の組で分類される。ここで $P[-1]$ はコホモロジー次数1にある。追加の1形式は導来接三角形の連結射を表し、基点付き内在的展開の同値でも保持される。

## 証明の見取り図

基本的な1階導分に底空間への射影条件を課し、その随伴作用から厳密な拡大を復元する。中心的等方性を交差加群に残すことが自己同型の保持に必要となる。内在的な側はde Rham代数の導来相対制限を使い、通常の余接束の場合にLie algebroidとの比較と降下を行う。

Introductionは、二項の場合の余接拡大には可積分なmixed構造を持ち上げる追加条件があること、固定した拡大の平坦分裂への障害と展開そのものの存在障害は異なることを強調する。滑らかで表現可能な葉空間上では、降下した展開が可積分Ehresmann接続に対応するという幾何学的解釈も与える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2606.04253)
- **Introduction:** [PDF](https://arxiv.org/pdf/2606.04253v3) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems A–E
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2606.04253v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
