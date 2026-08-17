---
layout: paper
title: "A characterization of ball quotient stacks"
title_ja: "球商スタックの特徴づけ"
authors: "Chirantan Chowdhury, Matteo Costantini, Aryaman Patel"
topic: algebraic-geometry
tags:
  - stability
  - higgs-nonabelian-hodge
  - uniformization
arxiv_id: "2608.04688v1"
arxiv_url: "https://arxiv.org/abs/2608.04688"
arxiv_submitted: "2026-08-05"
arxiv_updated: "2026-08-05"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We characterize smooth proper Deligne-Mumford stacks $\mathscr{X}$ that arise as compactifications
  of ball quotient stacks $[\mathbb{B}^d/Γ]$. Moreover, we show that every ball quotient admits a
  compactification whose boundary divisor $\mathscr{D}:=\mathscr{X}-[\mathbb{B}^d/Γ]$ is a disjoint
  union of quotient stacks $[A/G]$, where $A$ is an abelian variety and $G$ is a finite group. This
  generalizes a result of Deng-Cadorel. Our strategy combines Simpson's non-abelian Hodge
  correspondence for smooth proper DM-stacks, Mochizuki's generalization of the classical Simpson's
  correspondence to the log setting, and the uniformization results of Deng-Cadorel.
summary: >-
  対数 Higgs 束の多重安定性と Chern 類等式から、滑らかで固有な Deligne--Mumford スタックの開部分が複素単位球の商になることを特徴づける。逆に任意の球商スタックについて、境界が有限群による Abel 多様体の商の非交和となる滑らかな固有コンパクト化を構成する。
abstract_en: >-
  We characterize smooth proper Deligne-Mumford stacks $\mathscr{X}$ that arise as compactifications of ball quotient stacks $[\mathbb{B}^d/Γ]$. Moreover, we show that every ball quotient admits a compactification whose boundary divisor $\mathscr{D}:=\mathscr{X}-[\mathbb{B}^d/Γ]$ is a disjoint union of quotient stacks $[A/G]$, where $A$ is an abelian variety and $G$ is a finite group. This generalizes a result of Deng-Cadorel. Our strategy combines Simpson's non-abelian Hodge correspondence for smooth proper DM-stacks, Mochizuki's generalization of the classical Simpson's correspondence to the log setting, and the uniformization results of Deng-Cadorel.
summary_en: ""
abstract_ja: >-
  滑らかで固有な Deligne--Mumford スタックが複素単位球の商スタックのコンパクト化となるための特徴づけを与える。また、任意の球商には、境界因子が Abel 多様体を有限群で割ったスタックの非交和となるコンパクト化が存在することを示す。方法は、スタック上および対数的設定での非可換 Hodge 対応と既存の一意化定理を組み合わせる。
abstract_source_url: "https://arxiv.org/abs/2608.04688"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.04688v1](https://arxiv.org/abs/2608.04688)
- **著者:** Chirantan Chowdhury, Matteo Costantini, Aryaman Patel
- **初回投稿日:** 2026年8月5日
- **最終更新日:** 2026年8月5日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

複素単位球 $\mathbb B^d\subset\mathbb C^d$ を $PU(d,1)$ の格子で割った球商は、負曲率をもつ複素多様体の代表的な一意化空間である。本論文の問題は、ある開いた幾何学的対象がいつ球商に由来するかを、コンパクト化上の代数幾何的データから判定することである。この種の特徴づけは、球による一意化を被覆空間から直接調べる代わりに、境界とベクトル束の安定性、Chern 類という計算可能な条件へ翻訳する。

Deng--Cadorel は準射影球商に対してこの方向の特徴づけを与えた。本論文はその枠組みを、有限の安定化群を許す滑らかな Deligne--Mumford（DM）スタックへ拡張する。多様体だけでなくスタックを扱うことで、torsion を含みうる格子による商 $[\mathbb B^d/\Gamma]$ を自然な対象として保持したまま、コンパクト化と境界の幾何を論じられる。

判定の中心にあるのは、滑らかで固有な DM スタック $\mathscr X$ と境界 $D$ に付随する自然な対数 Higgs 束である。その good covering への引き戻しが多重安定なら、対数余接束の第一・第二 Chern 類の間に Miyaoka--Yau 型の不等式が得られる。さらに境界が滑らかでこの不等式が等号になると、開スタック $\mathscr X-D$ は複素単位球の格子商として一意化される。

逆方向も本論文の主結果である。任意の格子 $\Gamma\subset PU(d,1)$ から始めると、球商スタック $[\mathbb B^d/\Gamma]$ には滑らかで固有な DM コンパクト化が存在し、その境界は Abel 多様体の有限群商の非交和になる。このコンパクト化では対数 Chern 類等式と自然な対数 Higgs 束の多重安定性が実現されるため、特徴づけの条件が実際の球商から回収される。

## 背景と問題設定

$\mathbb B^d\subset\mathbb C^d$ を複素 $d$ 次元単位球、$\Gamma\subset PU(d,1)$ を $\mathbb B^d$ に自己同型として作用する格子とする。$\Gamma$ に torsion がある場合も含めて商を記録する対象が球商スタック $[\mathbb B^d/\Gamma]$ である。本論文では、滑らかで固有な $d$ 次元 DM スタック $\mathscr X$ と単純正規交差（snc）因子 $D\subset\mathscr X$ を考え、その開部分 $\mathscr X-D$ がこの形になる条件を調べる。

スタック上の安定性を扱うため、著者らは Simpson の滑らかな射影的 hypercovering の考えを用いる。組 $(\mathscr X,D)$ の good covering とは、proper surjective hypercovering $f:Z_\bullet\to\mathscr X$ であって、$Z_\bullet$ 上の $f^*D$ の被約因子も snc となるものである。Introduction ではこの good covering が常に存在すると述べられている。$\mathscr X$ 上の束の (semi)stable 性は、$Z_\bullet$ 上への引き戻しがある ample polarization $L$ に関して slope-(semi)stable であることを通じて定義される。この方法により、$\mathscr X$ の粗モジュライ空間が射影的であることを安定性の定義段階では要求せずに済む。

主定理に現れる自然な対数 Higgs 束は

$$
\left(\Omega^1_{\mathscr X}(\log D)\oplus\mathcal O_{\mathscr X},\theta\right)
$$

であり、Higgs 場は Introduction で

$$
\begin{aligned}
\theta:\ \Omega^1_{\mathscr X}(\log D)\oplus\mathcal O_{\mathscr X}
&\longrightarrow
\left(\Omega^1_{\mathscr X}(\log D)\oplus\mathcal O_{\mathscr X}\right)
\otimes\Omega^1_{\mathscr X}(\log D),\\
(a,b)&\longmapsto(0,1)\otimes a
\end{aligned}
$$

と与えられる。この対数 Higgs 束が good covering 上の $L$ に関して多重安定であることが、Chern 類不等式を導く主要な仮定である。

## 主結果

### Chern 類不等式と球一意化（Theorem 1.1）

結論を先に述べると、自然な対数 Higgs 束の多重安定性から明示的な Chern 類不等式が従い、滑らかな境界の下で等号が成立すれば、開スタックは球商で一意化される。

正確には、$\mathscr X$ を有限型の滑らかで固有な $d$ 次元 DM スタック、$D\subset\mathscr X$ を snc 因子とする。$f:Z_\bullet\to\mathscr X$ を good covering、$L$ を $Z_\bullet$ 上の ample polarization とし、上の対数 Higgs 束が $L$ に関して多重安定であると仮定する。このとき $Z_\bullet$ 上で

$$
\left(
2(d+1)c_2\!\left(f^*\Omega^1_{\mathscr X}(\log D)\right)
-d\,c_1\!\left(f^*\Omega^1_{\mathscr X}(\log D)\right)^2
\right)\cdot c_1(L)^{d-2}\geq 0
$$

が成り立つ。これは対数余接束の第一・第二 Chern 類を、good covering 上の偏極との交点数として比較する不等式である。

球一意化には、$D$ が snc であるだけでなく**滑らか**であるという追加仮定が必要である。この仮定の下で上の不等式が等号になると、ある格子 $\Gamma\subset PU(d,1)$ が存在して

$$
\mathscr X-D\simeq[\mathbb B^d/\Gamma]
$$

となる。したがって Theorem 1.1 の論理は、対数 Higgs 束の多重安定性から Chern 類不等式を得て、境界の滑らかさを加えた等号成立の場合に球による一意化へ進む、という順序である。Introduction の Remark 1.2 は、$D$ が snc でも滑らかでない場合、普遍被覆スタックが一般には $\mathbb B^d$ と同型にならないと述べており、この追加仮定が実質的であることを示している。

### 境界の構造に関する帰結

Theorem 1.1 の等号の場合、$\mathscr X$ は、ある有限指数の正規 torsion-free 部分格子 $\Gamma'\subset\Gamma$ に対応する滑らかな toroidal compactification $X'$ と有限群 $G=\Gamma/\Gamma'$ からなる商スタック $[X'/G]$ と双有理同値になる。

さらに $\mathscr X$ の粗モジュライ空間 $X$ が射影的であると仮定すると、Introduction では $X\simeq X'/G$ となり、$\mathbb B^d/\Gamma$ の射影的コンパクト化の境界が

$$
[A/G]
$$

型、すなわち Abel 多様体 $A$ の有限群 $G$ による商の非交和として記述されると述べられている。複数の境界成分が互いに交わらないこの表示は、球商の cusp に付加される境界の幾何を有限商まで含めて表す。

### 球商スタックからの逆向きの構成（Theorem 1.3）

Theorem 1.1 が条件から球商を認識する方向であるのに対し、Theorem 1.3 は球商から出発して条件を満たすコンパクト化を構成する逆方向である。任意の格子 $\Gamma\subset PU(d,1)$ が $\mathbb B^d$ に自己同型として作用するとき、$[\mathbb B^d/\Gamma]$ は滑らかで固有な DM スタック $\mathscr X$ にコンパクト化でき、その境界因子 $D\subset\mathscr X$ は Abel 多様体の有限群商の非交和になる。

このコンパクト化上では、次の対数 Chern 類等式が成立する。

$$
2(d+1)c_2\!\left(\Omega^1_{\mathscr X}(\log D)\right)
-d\,c_1\!\left(\Omega^1_{\mathscr X}(\log D)\right)^2=0
$$

さらに Theorem 1.1 と同じ自然な対数 Higgs 束は、組 $(\mathscr X,D)$ の任意の good covering $Z_\bullet\to\mathscr X$ 上で、任意の ample polarization に関して多重安定である。したがって、Theorem 1.1 の判定条件は抽象的な十分条件にとどまらず、任意の球商スタックに対して Theorem 1.3 のコンパクト化により実現される。

## 証明の見取り図

Introduction によれば、まず proper hypercovering を用いて $\mathscr X$ を滑らかな射影多様体の系 $Z_\bullet$ で覆い、境界の引き戻しも snc となる good covering を構成する。これはスタック上の対数 Higgs 束の安定性を、ample polarization を備えた射影的な各段階上の slope 安定性として扱うための基盤である。

次に著者らは、滑らかで固有な DM スタックに対する Simpson の非可換 Hodge 対応と、Mochizuki による対数的 Simpson 対応を組み合わせ、スタック上の対数 Higgs 束に対する Simpson--Mochizuki 型対応を確立する。この対応が、多重安定な自然対数 Higgs 束を一意化に必要な Hodge 理論的データへ移す役割を担う。

Theorem 1.1 では、この枠組みから多重安定な対数 Higgs 束に Chern 類不等式を適用する。境界が滑らかで等号が成立する場合には、等号の情報を Deng--Cadorel の一意化結果へ接続し、開スタックを複素球の格子商として同定する。Theorem 1.3 では逆に、球商から適切なコンパクト化を構成し、その境界構造、対数 Chern 類等式、多重安定性を確認する。ここで述べたのは Introduction が示す理論の役割と論理的な流れであり、後続節の証明詳細を再現したものではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.04688](https://arxiv.org/abs/2608.04688)
- **Introduction:** Section 1, pp. 1--3
- **Chern 類不等式と球一意化:** Theorem 1.1, pp. 1--2, equation (1)
- **非滑らかな snc 境界に関する注意:** Remark 1.2, p. 2
- **逆向きのコンパクト化:** Theorem 1.3, p. 2, equation (2)
- **Introduction 中で言及された対応定理:** Theorem 4.1
- **確認した arXiv バージョン:** v1
- **確認したライセンス:** CC BY 4.0（arXiv Abstract ページの表示）
- **source_scope:** Abstract and Introduction
