---
layout: paper
title: "Gap theorems and achirality for automorphisms of K3 surfaces and Enriques surfaces"
title_ja: "K3曲面・Enriques曲面の自己同型に対するギャップ定理と非カイラル性"
authors: "Kohei Kikuta, Yuta Takada, Taiki Takatsu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.GR
  - math.GT
topic: algebraic-geometry
arxiv_id: "2604.04682v1"
arxiv_url: "https://arxiv.org/abs/2604.04682"
arxiv_submitted: "2026-04-06"
arxiv_updated: "2026-04-06"
summary: >-
  K3曲面、Enriques曲面、既約正則シンプレクティック多様体の自己同型群にエントロピーノルムを導入し、正エントロピー自己同型の安定ノルムに一様なギャップを示す。さらに零エントロピーの放物型自己同型について、保存する種数1ファイブレーションを用いて非カイラル性を特徴付け、Enriques曲面では全てが非カイラルであることを証明する。
abstract_en: ""
summary_en: >-
  This work connects automorphism groups of K3, Enriques, and irreducible holomorphic symplectic varieties with geometric group theory. It defines an entropy norm and proves that its stabilization vanishes precisely for achiral positive-entropy automorphisms, while chiral ones satisfy a uniform positive lower bound. For parabolic automorphisms, achirality is analyzed through preserved genus-one fibrations and their Jacobians. The resulting criteria distinguish the K3 case from Enriques surfaces, where every parabolic automorphism is achiral.
abstract_ja: >-
  K3曲面、Enriques曲面、既約正則シンプレクティック多様体の自己同型群に対し、エントロピーノルムのギャップ定理を証明する。またK3曲面とEnriques曲面の自己同型の非カイラル性を、種数1ファイブレーションを通じて研究する。
abstract_source_url: "https://arxiv.org/abs/2604.04682v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.04682v1](https://arxiv.org/abs/2604.04682v1)
- **著者:** Kohei Kikuta, Yuta Takada, Taiki Takatsu
- **初回投稿日・最終更新日:** 2026年4月6日（v1）
- **主分類・副分類:** math.AG（主分類）, math.GR, math.GT（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

群の元 $g$ がある正整数 $m$ について $g^m$ と $g^{-m}$ が共役なら、$g$ は非カイラル（achiral）と呼ばれる。安定交換子長のギャップ現象では、安定量が消える非カイラル元と、正の下限を持つカイラル元を分けることが本質になる。

本論文はこの考えを代数多様体の自己同型群へ移す。K3曲面、Enriques曲面、射影既約正則シンプレクティック多様体の自己同型群が関連する双曲空間へ作用することを用い、零エントロピー自己同型を生成集合とするエントロピーノルムとその安定化にギャップ定理を証明する。

正エントロピーの場合、安定エントロピーノルムの消滅は非カイラル性と同値で、カイラル元には多様体ごとの正の一様下限がある。零エントロピー・無限位数の放物型自己同型については、保存される種数1ファイブレーションとJacobianファイブレーション上の反転を用いて非カイラル性を判定する。

K3曲面では同じファイブレーション保存群にカイラル・非カイラルな放物型自己同型が共存し得る一方、Enriques曲面では全ての放物型自己同型が非カイラルとなる。この差を代数幾何的データで可視化する点も主結果である。

## 主結果

### エントロピーノルムのギャップ（Theorem A / Theorem 3.19）

$X$ を標数2でない代数閉体上のK3曲面またはEnriques曲面、あるいは射影既約正則シンプレクティック多様体とする。正エントロピー自己同型 $g$ について、$g$ が非カイラルであることと安定エントロピーノルム $\bar e(g)=0$ は同値である。また正の定数 $\Theta$ が存在し、任意のカイラルな正エントロピー自己同型に対して

$$
\bar e(g)\geq\Theta
$$

が成り立つ。

### K3曲面の放物型自己同型（Theorem B）

代数閉体上のK3曲面 $X$ と正のMordell–Weil階数を持つ楕円ファイブレーション $p:X\to B$ を考える。Introductionでは、Jacobianファイブレーションへの自然な準同型の像が反転 $[-1]$ を含むこと、$p$ のmultisection indexが1または2であること、そしてある放物型 $g$ を共役で $g^{-1}$ へ送る適切な自己同型が存在することが同値と述べられる。これらが成り立つと $\operatorname{Aut}_p(X)$ は一様非カイラルである。

### Enriques曲面の放物型自己同型（Theorem C / Theorem 4.8）

代数閉体上のEnriques曲面 $X$ では、各種数1ファイブレーション $p:X\to B$ に対して $\operatorname{Aut}_p(X)$ は一様非カイラルである。特に $X$ の全ての放物型自己同型は非カイラルである。

## 証明の見取り図

正エントロピー側では、自己同型群の幾何学的有限性、幾何学的有限Kleinian群が適切な双曲グラフへアシリンドリカルに作用すること、そしてその作用にCalegari–Fujiwara型の議論を拡張することを組み合わせる。放物型側では、保存される種数1ファイブレーションをJacobianへ移し、反転自己同型とmultisection indexを通じて逆元への共役を検出する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.04682v1](https://arxiv.org/abs/2604.04682v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems A, B, C（Theorems 3.19, 4.7/4.10, 4.8）
- **論文構成の説明:** Section 1.3, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
