---
layout: paper
title: "The constant scalar curvature Kähler condition is very general"
title_ja: "定スカラー曲率Kähler条件はvery generalである"
authors: "Ruadhaí Dervan"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  Recent work of Trusiani implies that the existence of a constant scalar curvature Kähler metric on a smooth polarised variety with discrete automorphism group is equivalent to uniform arc K-stability. We prove that uniform arc K-stability is essentially algebraic in flat families of polarised varieties. When the polarised varieties are further smooth and have discrete automorphism group, combining these two results implies that the constant scalar curvature Kähler locus is very general. We use this result to give the first examples of constant scalar curvature Kähler metrics whose existence only follows from the recent solution of the Yau--Tian--Donaldson conjecture. Our technique is to prove a general result stating that stability of a pair in the sense of Paul is essentially an algebraic property in families, and to employ prior work with Reboulet relating uniform arc K-stability to stability of an associated pair.
topic: algebraic-geometry
tags:
  - csck-extremal-kahler-metrics
  - k-stability
  - moduli
arxiv_id: "2504.15195v2"
arxiv_url: "https://arxiv.org/abs/2504.15195v2"
arxiv_submitted: "2025-04-21"
arxiv_updated: "2026-06-03"
summary: >-
  滑らかで自己同型群が有限な偏極多様体の平坦族において、cscK計量をもつファイバーの集合が可算個のZariski開集合の共通部分になることを示す。TrusianiによるYau–Tian–Donaldson対応と、uniform arc K-stabilityをPaulのpairの安定性へ移す代数的議論を組み合わせ、very generalな変形上に新しいcscK例を与える。
abstract_en: ""
summary_en: >-
  This work studies how the existence of constant-scalar-curvature Kähler metrics varies in algebraic families. For smooth polarized fibers with finite automorphism groups, it proves that the metric-existence locus is a countable intersection of Zariski-open subsets. The argument first establishes constructibility properties for uniform arc K-stability through Paul's stability of pairs. Trusiani's form of the Yau–Tian–Donaldson theorem then converts the algebraic stability statement into the cscK result and yields new examples after deformation.
abstract_ja: >-
  偏極多様体の平坦族におけるuniform arc K-stabilityの集合が代数的な構成可能性をもつことを証明する。滑らかで自己同型群が離散的な場合、TrusianiのYau–Tian–Donaldson対応と合わせて、cscK計量をもつファイバーの集合がvery generalであることを導く。また、この結果を用い、近年のYau–Tian–Donaldson予想の解決によって初めて存在が従うcscK計量の例を構成する。
abstract_source_url: "https://arxiv.org/abs/2504.15195v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2504.15195v2](https://arxiv.org/abs/2504.15195v2)
- **著者:** Ruadhaí Dervan
- **初回投稿日:** 2025年4月21日
- **最終更新日:** 2026年6月3日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偏極多様体 $(X,L)$ のクラス $c_1(L)$ にcscK計量が存在するかは解析的な問題だが、Yau–Tian–Donaldson予想はこれを代数的安定性で捉える。本論文は、単一の多様体ではなく平坦族の中でこの条件がどう分布するかを問う。

主結論は、滑らかな偏極多様体の族で各ファイバーの自己同型群が有限なら、cscK locusがvery general、すなわち可算個のZariski開集合の共通部分になるというものである。空でない場合、この集合は特にZariski稠密である。ただし「very general」はZariski開そのものを意味しない。

鍵は、cscK存在と同値なuniform arc K-stabilityを族の中で扱うことである。著者はこの安定性をPaulのpairの安定性へ還元し、pairの安定・半安定 locusに構成可能性を証明する。解析的開性とTrusianiの同値定理が、最終的にvery general性を与える。

応用として、既知の有限被覆上のcscK計量から出発し、対称性を壊すvery generalな変形にもcscK計量が存在することが従う。Introductionでは、これらを一般cscK版Yau–Tian–Donaldson予想の近年の解決を本質的に使う最初の新例と位置づけている。

## 背景と問題設定

自己同型群が離散的な滑らかな偏極多様体について、Trusianiの結果はcscK計量の存在をuniform arc K-stabilityと同値にする。arcは通常のtest configurationより一般の退化を符号化するため、族の中での振る舞いを直接調べるには無限に多くの条件を整理する必要がある。

ファイバー $b\in B$ に対して

$$
B_{\mathrm{cscK}}=\{b\in B\mid c_1(L_b)\text{ がcscK計量をもつ}\}
$$

と置く。本論文の問題は、この部分集合がZariski位相に関してどの程度代数的か、という形に定式化される。

## 主結果

### cscK locusのvery general性（Theorem 1.1）

平坦族 $(\mathcal X,\mathcal L)\to B$ のファイバーが滑らかで、各 $(X_b,L_b)$ の自己同型群が有限であるとする。このとき $B_{\mathrm{cscK}}$ は可算個のZariski開部分集合の共通部分である。空である可能性は許されるが、非空なら稠密になる。有限自己同型群の仮定は、Introductionが指摘する通り本質的である。

### uniform arc K-stabilityの構成可能性（Theorem 1.2）

特異なファイバーも許す偏極多様体の平坦族について、uniformly arc K-stable locusは「構成可能集合の可算共通部分」の可算和であり、arc K-semistable locusは構成可能集合の可算共通部分になる。これは直ちにZariski開性を主張するものではないが、解析的開性と組み合わせるのに十分な代数的構造を与える。

### pairの安定性（Theorem 1.3）

Paulの意味でのpairについて、stable locusは構成可能集合の可算和、semistable locusは構成可能である。これをChow点・判別式点、または特異な場合のHilbert schemeとCM線束から作るpairに適用することで、Theorem 1.2へ橋を架ける。

## 証明の見取り図

まずuniform arc K-stabilityを、Dervan–Rebouletの先行研究を通じてpairの安定性の列に翻訳する。pairの軌道閉包が指定された不安定集合と交わるかという条件を幾何学的に調べ、semistable locusの構成可能性とstable locusの可算表示を得る。

次にこの結果を族に付随するpairへ適用し、Theorem 1.2を導く。滑らかかつ自己同型群が離散的な場合には、cscK条件の解析位相での開性と、TrusianiによるcscK存在とuniform arc K-stabilityの同値を使い、構成可能な記述を可算個のZariski開集合の共通部分へ高める。

## 原論文との対応

- **Abstractページ:** [arXiv:2504.15195v2](https://arxiv.org/abs/2504.15195v2)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** Introduction, pp. 3–5
- **確認したarXivバージョン:** v2（backlog指定版。Abstractページには後続のv3も掲載）
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
