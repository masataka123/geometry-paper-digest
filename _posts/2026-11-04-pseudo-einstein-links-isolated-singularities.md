---
layout: paper
title: Pseudo-Einstein Structures on Links of Isolated Singularities
title_ja: 孤立特異点のリンク上のpseudo-Einstein構造
authors: Yoshinori Gongyo, Kengo Hirachi, Shuya Matsumoto, Yuya Takeuchi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.CV
arxiv_abstract: We study Jack Lee's conjecture that, for a compact strictly pseudoconvex CR manifold $M$, the condition $c_1(T^{1,0}M)=0$ in $H^2(M,\mathbb{R})$ implies the existence of a pseudo-Einstein structure. For links of isolated singularities, we construct counterexamples in every odd dimension at least three, with $c_1(T^{1,0}M)=0$ in $H^2(M,\mathbb{Z})$ and $b_1(M)=0$. For isolated algebraic singularities of log canonical type and complex dimension at least three, we prove that the real Chern class condition is equivalent to $\mathbb{Q}$-Cartierness of the canonical divisor, log canonicity, and the existence of a pseudo-Einstein structure. Finally, we construct a Du Bois threefold singularity whose link satisfies the real Chern class condition but admits no pseudo-Einstein structure. The initial versions of the proofs were generated with AI assistance and were subsequently revised and verified by the authors.
topic: differential-geometry
tags:
- cr-geometry
- singularities
- chern-classes
- minimal-model-program
arxiv_id: 2611.04851v1
arxiv_url: https://arxiv.org/abs/2611.04851
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: 孤立特異点のリンクがpseudo-Einstein構造をもつ条件を、標準因子の性質と比較する。第一Chern類と第一Betti数がともに消える反例を構成する一方、log canonical typeではChern類消滅と構造の存在を同値にする。Du Bois特異点への一般化には反例がある。
abstract_en: ''
summary_en: The paper tests how much topological data can determine a pseudo-Einstein structure on the link of a singularity. It constructs links for which the first Chern class vanishes even integrally and the first Betti number is zero, while the desired structure is absent. A contrasting theorem identifies existence with a canonical-divisor condition for isolated singularities of log canonical type. A separate three-dimensional example shows why the Du Bois condition cannot simply replace that hypothesis.
abstract_ja: CRリンク上の第一Chern類の消滅がpseudo-Einstein構造を保証するかという問題に、特異点論から答える。反例は第一Betti数が零という制約を付けても存在する。他方、複素次元3以上の孤立正規特異点がlog canonical typeならば、実第一Chern類の消滅、標準因子のQ-Cartier性、log canonical性、リンク上の構造の存在は同値である。Du Bois三次元特異点には、この肯定的結論が成り立たない例を与える。
abstract_source_url: https://arxiv.org/abs/2611.04851
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.04851v1](https://arxiv.org/abs/2611.04851)
- **著者:** Yoshinori Gongyo, Kengo Hirachi, Shuya Matsumoto, Yuya Takeuchi
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.DG（主分類）; math.AG, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

強擬凸CR多様体上のpseudo-Einstein構造を得るには、第一Chern類の消滅が必要である。しかし、この位相的条件だけで構造の存在が決まるかどうかは別問題である。本論文は孤立複素特異点のリンクを用いて、この隔たりを調べる。

第一の結果は反例の構成である。著者らは、整数係数の第一Chern類が消え、しかも第一Betti数が零であるリンクでもpseudo-Einstein構造をもたない例を示す。したがって、実係数でのChern類消滅に低次の位相的制約を加えても、一般の存在定理にはならない。

他方で、特異点がlog canonical typeであるという双有理幾何的条件を課すと、状況は明瞭になる。複素次元3以上では、リンクの実第一Chern類が消えることが標準因子のQ-Cartier性を導き、pseudo-Einstein構造の存在と同値になる。

最後に、より弱いDu Bois条件への置き換えができないことを三次元特異点の例で示す。境界のCR幾何、標準束の平坦性、特異点の双有理的性質を区別しながら結びつける論文である。

## 背景と問題設定

孤立正規複素特異点$(X,o)$の十分小さいリンク$M$は強擬凸CR多様体となる。pseudo-Einstein構造の存在は、境界の内側のcollarで標準束に平坦Hermitian計量を与えられるかという問題と関係する。CR次元$n\geq2$では、対応する接触形式のTanaka–Webster Ricciテンソルが純粋な跡成分だけをもつという通常の定義と結びつく。

Leeの必要条件は$c\_1(T^{1,0}M)=0$という実コホモロジーの条件である。これに対し、標準因子$K\_X$がQ-Cartierかどうかは正則構造を含む条件であり、単なる位相的不変量ではない。

ここでlog canonical typeとは、有効Q-Weil因子$B$が存在して$K\_X+B$がQ-Cartierとなり、対$(X,B)$のdiscrepancyがすべて$-1$以上になることをいう。$B=0$でこの条件を満たす場合が、$X$自体のlog canonical性である。

## 主結果

### 位相的条件を強めても存在しない例（Theorem 1）

任意の$n\geq1$に対し、複素次元$n+1$の孤立正規複素解析特異点で、その実次元$2n+1$のリンクが

$$
c\_1(T^{1,0}M)=0\quad\text{in }H^2(M,\mathbb Z),\qquad b\_1(M)=0
$$

を満たすにもかかわらずpseudo-Einstein構造をもたないものが存在する。

$n\geq2$では$K\_X$がQ-Cartierでない例を選べる。$n=1$では、Némethi–Okumaの非Gorenstein曲面特異点を用い、さらに$H\_1(M,\mathbb Z)=0$とできる。後者では、整数ホモロジー球面リンクに対する構造の存在と標準因子のCartier性との対応が障害を捉える。

### Log canonical typeでの同値条件（Theorem 2）

$(X,o)$が複素次元$n+1\geq3$の孤立正規複素解析特異点でlog canonical typeであるとき、十分小さいリンク$M$について

$$
c\_1(T^{1,0}M)=0\text{ in }H^2(M,\mathbb R)
\quad\Longleftrightarrow\quad K\_X\text{ is }\mathbb Q\text{-Cartier}
$$

が成り立つ。さらにこれらは、$X$が$o$でlog canonicalであること、および$M$がpseudo-Einstein構造をもつこととも同値である。

重要なのは、有効境界$B$を許した仮定から出発しても、Chern類消滅によって境界なしのlog canonical性へ到達することである。一般の孤立特異点にこの結論を拡張することはTheorem 1が妨げる。

### Du Bois条件では足りない（Theorem 3）

正規孤立Du Bois三次元特異点で、穿孔近傍$U$の標準束が

$$
c\_1(K\_U)=0\quad\text{in }H^2(U,\mathbb R)
$$

を満たしながら、どの正のテンソル冪もリンク内側のcollarでunitary flatにならない例が存在する。その実5次元リンクはpseudo-Einstein構造をもたない。この結果のChern類消滅は実係数であり、Theorem 1の整数係数での消滅と同一視してはならない。

## 証明の見取り図

Theorem 1では、Cataneseの射影曲面に由来する非自明な拡張類を高次元化して保持する。リンクの第一ホモロジーが有限になることでunitary characterの像も有限となり、構造の存在をQ-Cartier性に関する障害へ落とし込む。

Theorem 2では、リンクと穿孔近傍のホモトピー同値から標準束の実Chern類消滅を得る。解消上の台付きコホモロジーにより数値的Q-Cartierな引き戻しを作り、log canonical typeの仮定と合わせて数値的log canonical性を導く。解析空間上の極小モデル理論に基づく降下定理が、これをQ-Cartier性とlog canonical性へ変える。逆方向では標準因子のCartier倍の局所自明化が平坦計量を与える。

Du Boisの反例では、Kollár型の例外因子構成と、その双対複体のサイクルに沿った非unitaryな貼り合わせが役割を果たす。位相的な自明性と、必要な正則・unitary平坦性との違いが残る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.04851)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.04851v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1–3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.04851v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
