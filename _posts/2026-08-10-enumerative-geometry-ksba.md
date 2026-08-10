---
layout: paper
title: "Enumerative Geometry on KSBA moduli spaces"
title_ja: "KSBAモジュライ空間上の数え上げ幾何"
authors: "Yunfeng Jiang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.19923v1"
arxiv_url: "https://arxiv.org/abs/2605.19923v1"
arxiv_submitted: "2026-05-19"
arxiv_updated: "2026-05-19"
summary: >-
  一般型曲面のKSBAモジュライ空間に完全障害理論を導入する二つのコンパクト化を概説する。lci被覆とbubble-tree曲面のモジュライから仮想基本類をKSBA空間へ押し出し、Kappa類などを積分するtautological不変量を定義して数え上げ幾何への入口を作るサーベイである。
abstract_en: ""
summary_en: >-
  This survey reviews two enhancements of the KSBA compactification for surfaces of general type. One replaces problematic singularities by local-complete-intersection covering stacks, while the other uses bubble-tree surfaces. Both constructions support perfect obstruction theories and proper maps to the KSBA space, allowing a virtual fundamental class to be pushed forward. The resulting class makes tautological intersection numbers available as prospective enumerative invariants.
abstract_ja: >-
  一般型曲面のKSBAモジュライ空間に対する二つの新しいコンパクト化を概説する。どちらも完全障害理論を持つため仮想基本類が構成でき、KSBA空間上のtautological不変量を定義できる。これをKSBAモジュライ空間上の数え上げ幾何の出発点として、今後の方向も論じる。
abstract_source_url: "https://arxiv.org/abs/2605.19923v1"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.19923v1](https://arxiv.org/abs/2605.19923v1)
- **著者:** Yunfeng Jiang
- **初回投稿日・確認版の更新日:** 2026年5月19日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

安定曲線のDeligne–Mumford空間の高次元版であるKSBA空間では、境界の安定曲面が一般にlciでないslc特異点を持つ。このため変形理論に高次障害が現れ、通常の二項完全障害理論をそのまま置くことが難しい。

サーベイが扱う第一の解決法は、特異点をlci被覆Deligne–Mumford stackで置き換える方法である。第二はsimple elliptic、cusp、degenerate cusp特異点を単純正規交叉の有理曲面からなるbubble treeで置き換える方法である。両モジュライstackはKSBA空間へのproper morphismを持つ。

lci性により変形・障害が二つの次数に集中し、完全障害理論と仮想基本類が得られる。その押し出しをKSBA空間の仮想基本類とし、CM直線束やKappa類を積分することでtautological不変量を定義する。

## 背景と問題設定

$\mathcal M_N=\mathcal M_{K^2,\chi,N}$ は、$\omega_{X/T}^{[N]}$ が可逆となるslc安定曲面の $\mathbb Q$-Gorenstein族を分類する。非lciな境界特異点では高次障害が消えないことが、仮想交叉理論の直接構成を妨げる。

lci被覆法はリンクの基本群に由来する被覆を族に持ち上げる。一方bubble法はKähler–Einstein計量のrescalingで現れるbubblingを動機とし、特異点近傍へ反標準因子に沿って有理曲面を付加する。後者には解析幾何も関わるが、得られるモジュライはproperなDM stackとなる。

## 主結果

### lci被覆モジュライ（Theorems 1.1, 1.2）

明記された例外を除くslc曲面の平坦平滑化族はlci被覆stackの平坦族へ持ち上がる。fake lci coverも含めて構成した $\mathcal M_N^{\mathrm{lci}}$ はDM stackで、

$$
f^{\mathrm{lci}}:\mathcal M_N^{\mathrm{lci}}\longrightarrow\mathcal M_N
$$

はproperである。

### bubble-treeモジュライ（Theorems 1.3, 1.4）

bubble-treeで置換したindex-one coverのモジュライ $\mathcal M_N^{\mathrm{Bub}}$ もproperなDM stackとなり、KSBA空間へのproper morphismを持つ。二つの構成の間に予想される双有理関係はConjecture 1.6として述べられ、証明済み主張とは区別されている。

### 仮想基本類（Theorem 1.7）

$\mathcal M_N^{\mathrm{KSBA}}$ を上のいずれかのstackとすると、その二項完全障害理論から $[\mathcal M_N^{\mathrm{KSBA}}]^{\mathrm{vir}}$ が得られ、KSBA空間では

$$
[\mathcal M_N]^{\mathrm{vir}}=f_*[\mathcal M_N^{\mathrm{KSBA}}]^{\mathrm{vir}}
$$

と定義できる。さらに $\kappa_i=p_*(c_1(K_{X/\mathcal M_N})^{i+2})$ を用い、次数和が仮想次元 $vd$ のとき

$$
I_{i_1,\ldots,i_m}(\mathcal M_N)=\int_{[\mathcal M_N]^{\mathrm{vir}}}\prod_{j=1}^m\kappa_{i_j}
$$

というtautological不変量を導入する。

## 証明の見取り図

lci covering stackまたはbubble index-one covering stack上の普遍族に相対余接複体を取り、相対双対化とKodaira–Spencer写像から障害理論を構成する。lci性と有限自己同型により変形複体が二項に収まり、Behrend–Fantechi/Li–Tianの枠組みで仮想基本類が得られる。それをproper morphismでKSBA空間へ押し出す。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.19923v1](https://arxiv.org/abs/2605.19923v1)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.4, 1.7; Conjecture 1.6; Definition 1.8
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
