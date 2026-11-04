---
layout: paper
title: A counterexample to Lee's conjecture on pseudo-Einstein structures
title_ja: Pseudo-Einstein構造に関するLee予想の反例
authors: Dong Yuxin, Wang Haohao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: 'In 1988, J.~M.~Lee conjectured that a compact strictly pseudoconvex CR manifold admits a pseudo-Einstein contact form if and only if the real first Chern class of its holomorphic tangent bundle vanishes. The necessity of this condition was proved by Lee. We show that the condition is not sufficient: in every real dimension $2n+1\ge 5$ there is a compact connected strictly pseudoconvex CR manifold $M$ with $c_1(\Tone)=0$ in $H^2(M;\Z)$ which admits no pseudo-Einstein contact form. The examples are boundaries of small strictly pseudoconvex neighborhoods of a section $D\cong B$ with negative normal bundle in a $\PP^1$-bundle $\PP(E_e)\to B$, where $B=C^n$ is a power of a curve of genus two and $E_e$ is a non-split extension of $\cO_B$ by an ample line bundle $L$ with $K_B\cong L^2$. More generally, if $K_B\cong L^m$, such a boundary admits a pseudo-Einstein contact form if and only if $(m-1)e=0$, where $e\in H^1(B,L)$ is the extension class; the obstruction is detected on the
  first infinitesimal neighborhood of $D$.'
topic: differential-geometry
tags:
- cr-geometry
- chern-classes
- vector-bundles-sheaves
- stein-geometry
arxiv_id: 2611.02718v1
arxiv_url: https://arxiv.org/abs/2611.02718
arxiv_submitted: '2026-11-02'
arxiv_updated: '2026-11-02'
summary: 整数第一Chern類が消えてもpseudo-Einstein接触形式をもたない強擬凸CR多様体を、すべての奇数次元5以上で構成する。射影直線束の拡張類による必要十分条件が反例を与える。CR構造の変形における存在の非開性も示す。
abstract_en: ''
summary_en: The examples separate vanishing of the first Chern class from existence of a pseudo-Einstein contact form. They arise near a negative section in a projective-line bundle built from an extension of line bundles. A criterion in terms of the extension class detects an obstruction on the first infinitesimal neighborhood that is invisible to the integral Chern class. Varying that class also produces a family in which existence holds at the central member but fails at nearby nonzero members.
abstract_ja: Leeの予想の十分性方向に対し、実次元5以上のすべての奇数次元で反例を与える。反例の第一Chern類は実係数だけでなく整数係数でも零である。正の線束による拡張から作る射影直線束の負の切断近傍を用い、pseudo-Einstein構造の存在を拡張類の消滅条件に帰着する。これにより存在がCR構造の一般の小変形に関して開条件ではないことも分かる。
abstract_source_url: https://arxiv.org/abs/2611.02718
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.02718v1](https://arxiv.org/abs/2611.02718)
- **著者:** Dong Yuxin, Wang Haohao
- **初回投稿日:** 2026-11-02
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

強擬凸CR多様体のpseudo-Einstein接触形式は、Tanaka–Webster Ricciテンソルが純粋な跡成分だけをもつ接触形式である。その存在には第一Chern類の消滅が必要であり、Leeはこの条件が十分でもあると予想した。本論文はその十分性を否定する例を構成する。

反例では、第一Chern類は実係数どころか整数係数でも消える。それでも必要な正則線束の平坦性には障害が残る。位相的に捉えられる情報だけでは、pseudo-Einstein構造を判定できないことになる。

構成の舞台は、正の線束と自明線束の拡張から得る射影直線束である。負の法束をもつ切断の小近傍の境界を取ると、構造の存在は拡張類を用いた明示的な等式と同値になる。この等式が非自明な拡張を検出する。

拡張類を変形させると、中心では構造が存在し、任意の十分小さい非零パラメータでは存在しない族も得られる。これはCR構造全体を動かす変形についての結果であり、固定した複素多様体内で境界だけを動かす場合の既知の安定性とは区別される。

## 背景と問題設定

実次元$2n+1$、$n\geq2$の共向き付き強擬凸CR多様体を考える。pseudo-Einstein条件は

$$
R\_{\alpha\bar\beta}=\frac1nR\thinspace h\_{\alpha\bar\beta}
$$

であり、$R$が定数であることまでは要求しない。Leeによる必要条件は$c\_1(T^{1,0}M)=0$ in $H^2(M;\mathbb R)$である。

反例の構成には、滑らかな連結射影多様体$B$、ample線束$L$、拡張

$$
0\longrightarrow L\longrightarrow E\_e\longrightarrow\mathcal O\_B\longrightarrow0,\qquad e\in H^1(B,L)
$$

を用いる。$Y=\mathbb P(E\_e)$は一次元商をパラメータ化する規約で取り、$U=\mathcal O\_Y(1)$とする。自明線束への商が定める切断$D\cong B$の法束は$L^{-1}$であるため、その十分小さい近傍には強擬凸境界$M\_\epsilon$がある。

## 主結果

### 各次元の反例（Theorem A）

任意の$n\geq2$に対し、コンパクト連結強擬凸CR多様体$M^{2n+1}$で

$$
c\_1(T^{1,0}M)=0\quad\text{in }H^2(M;\mathbb Z)
$$

を満たすが、pseudo-Einstein接触形式をもたないものが存在する。しかも滑らかな射影多様体内の相対コンパクトな強擬凸領域の境界として実現できる。Leeの必要条件を否定するのではなく、その逆向きを否定する結果である。

### 拡張類による必要十分条件（Theorem B）

上の射影直線束の設定で$\dim\_{\mathbb C}B=n\geq2$、$K\_B\cong L^m$を仮定する。このとき十分小さい$\epsilon$に対し境界の整数第一Chern類は零であり、

$$
M\_\epsilon\text{がpseudo-Einstein接触形式をもつ}\quad\Longleftrightarrow\quad(m-1)e=0\text{ in }H^1(B,L)
$$

が成り立つ。言い換えると$m=1$、または拡張が分裂するときに限って存在する。

係数$m-1$は

$$
K\_Y\otimes\mathcal O\_Y((m+1)D)\cong U^{m-1}
$$

から現れる。$U$は$D$へ制限すると自明だが、第一無限小近傍で見ると$U^\ell$には$\ell e$という拡張類が残る。種数2の曲線$C$の積$B=C^n$を使い、$K\_B\cong L^2$かつ$e\ne0$とすることでTheorem Aへつながる。

### 存在はCR変形に対して開でない（Theorem C）

各実次元$2n+1\geq5$で、固定した滑らかな多様体上に強擬凸CR構造の滑らかな一径数族を作れる。すべてのメンバーの整数第一Chern類は消えるが、中心の構造にはpseudo-Einstein接触形式があり、十分小さい非零パラメータの構造には存在しない。

この族では周囲の複素構造も変わる。固定した複素多様体内の実超曲面としての小変形に関するTakeuchiの存在安定性とは矛盾しない。また、CR Q曲率を零にするという別の弱い予想については、これらの例だけでは決着しないと明記されている。

## 証明の見取り図

pseudo-Einstein接触形式があれば、境界の内側のcollarで標準束はunitary flatになる。この境界近くの条件を、内部の切断$D$の第一無限小近傍にある拡張類へ結びつけるのが中心である。

まずunitary holonomyを基底$B$へ降下させ、collar上の正則自明化を内部へ有理型に延長する。負の切断を一点へ収縮して得る正規Stein空間上で、Merker–PortenのHartogs延長定理を利用する。延長の因子が$D$に支えられることと標準束の上の恒等式から、$(m-1)e$という障害を取り出す。

充填領域にはコンパクト因子$D$が含まれるため、もとの領域はSteinではない。したがってStein多様体内の領域など、追加仮定のある既知の肯定的結果を反例に適用することはできない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.02718)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.02718v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems A–C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.02718v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
